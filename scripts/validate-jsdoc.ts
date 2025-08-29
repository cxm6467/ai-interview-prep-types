#!/usr/bin/env tsx

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { glob } from 'glob';
import { resolve, relative } from 'path';

const TS_FILE_PATTERNS = ['src/**/*.ts', '!src/**/*.d.ts', '!src/**/*.test.ts'];

interface ValidationError {
  file: string;
  line: number;
  message: string;
}

interface APIDocumentation {
  interfaces: InterfaceDoc[];
  types: TypeDoc[];
  functions: FunctionDoc[];
  classes: ClassDoc[];
}

interface InterfaceDoc {
  name: string;
  description: string;
  properties: PropertyDoc[];
  filePath: string;
  generics?: string;
}

interface TypeDoc {
  name: string;
  description: string;
  definition: string;
  filePath: string;
}

interface FunctionDoc {
  name: string;
  description: string;
  parameters: ParameterDoc[];
  returnType: string;
  returns?: string;
  filePath: string;
}

interface ClassDoc {
  name: string;
  description: string;
  methods: MethodDoc[];
  filePath: string;
}

interface PropertyDoc {
  name: string;
  type: string;
  optional: boolean;
}

interface ParameterDoc {
  name: string;
  type: string;
  optional: boolean;
  description?: string;
}

interface ParamDoc {
  name: string;
  description: string;
}

interface MethodDoc {
  name: string;
  signature: string;
}

class JSDocValidator {
  private errors: ValidationError[] = [];
  private warnings: ValidationError[] = [];
  private fixes: Array<{ file: string; content: string }> = [];

  validateFile(filePath: string, autoFix: boolean = false): void {
    if (!existsSync(filePath)) {
      this.errors.push({
        file: filePath,
        line: 0,
        message: 'File not found',
      });
      return;
    }

    const content = readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    let modifiedContent = content;
    let hasChanges = false;

    if (autoFix) {
      const result = this.fixFunctions(modifiedContent, filePath, lines);
      modifiedContent = result.content;
      hasChanges = hasChanges || result.hasChanges;

      const interfaceResult = this.fixInterfaces(
        modifiedContent,
        filePath,
        modifiedContent.split('\n'),
      );
      modifiedContent = interfaceResult.content;
      hasChanges = hasChanges || interfaceResult.hasChanges;

      const typeResult = this.fixTypes(
        modifiedContent,
        filePath,
        modifiedContent.split('\n'),
      );
      modifiedContent = typeResult.content;
      hasChanges = hasChanges || typeResult.hasChanges;

      const classResult = this.fixClasses(
        modifiedContent,
        filePath,
        modifiedContent.split('\n'),
      );
      modifiedContent = classResult.content;
      hasChanges = hasChanges || classResult.hasChanges;

      if (hasChanges) {
        this.fixes.push({ file: filePath, content: modifiedContent });
      }
    } else {
      this.validateFunctions(content, filePath, lines);
      this.validateInterfaces(content, filePath, lines);
      this.validateTypes(content, filePath, lines);
      this.validateClasses(content, filePath, lines);
    }
  }

  private validateFunctions(
    content: string,
    filePath: string,
    lines: string[],
  ): void {
    // Match function declarations and exports
    const functionRegex = /^(?:export\s+)?(?:async\s+)?function\s+(\w+)/gm;
    const arrowFunctionRegex =
      /^(?:export\s+)?const\s+(\w+)\s*=\s*(?:\([^)]*\)\s*=>\s*{|async\s*\([^)]*\)\s*=>\s*{)/gm;

    let match: RegExpExecArray | null;

    // Check regular functions
    while ((match = functionRegex.exec(content)) !== null) {
      const functionName = match[1];
      const lineNumber = this.getLineNumber(content, match.index);

      if (!this.hasJSDocBefore(lines, lineNumber - 1)) {
        this.errors.push({
          file: filePath,
          line: lineNumber,
          message: `Function '${functionName}' is missing JSDoc documentation`,
        });
      }
    }

    // Check arrow functions
    while ((match = arrowFunctionRegex.exec(content)) !== null) {
      const functionName = match[1];
      const lineNumber = this.getLineNumber(content, match.index);

      if (!this.hasJSDocBefore(lines, lineNumber - 1)) {
        this.errors.push({
          file: filePath,
          line: lineNumber,
          message: `Function '${functionName}' is missing JSDoc documentation`,
        });
      }
    }
  }

  private validateInterfaces(
    content: string,
    filePath: string,
    lines: string[],
  ): void {
    const interfaceRegex = /^(?:export\s+)?interface\s+(\w+)/gm;
    let match: RegExpExecArray | null;

    while ((match = interfaceRegex.exec(content)) !== null) {
      const interfaceName = match[1];
      const lineNumber = this.getLineNumber(content, match.index);

      if (!this.hasJSDocBefore(lines, lineNumber - 1)) {
        this.errors.push({
          file: filePath,
          line: lineNumber,
          message: `Interface '${interfaceName}' is missing JSDoc documentation`,
        });
      }
    }
  }

  private validateTypes(
    content: string,
    filePath: string,
    lines: string[],
  ): void {
    const typeRegex = /^(?:export\s+)?type\s+(\w+)/gm;
    let match: RegExpExecArray | null;

    while ((match = typeRegex.exec(content)) !== null) {
      const typeName = match[1];
      const lineNumber = this.getLineNumber(content, match.index);

      if (!this.hasJSDocBefore(lines, lineNumber - 1)) {
        this.errors.push({
          file: filePath,
          line: lineNumber,
          message: `Type '${typeName}' is missing JSDoc documentation`,
        });
      }
    }
  }

  private validateClasses(
    content: string,
    filePath: string,
    lines: string[],
  ): void {
    const classRegex = /^(?:export\s+)?(?:abstract\s+)?class\s+(\w+)/gm;
    let match: RegExpExecArray | null;

    while ((match = classRegex.exec(content)) !== null) {
      const className = match[1];
      const lineNumber = this.getLineNumber(content, match.index);

      if (!this.hasJSDocBefore(lines, lineNumber - 1)) {
        this.errors.push({
          file: filePath,
          line: lineNumber,
          message: `Class '${className}' is missing JSDoc documentation`,
        });
      }
    }
  }

  private fixFunctions(
    content: string,
    filePath: string,
    lines: string[],
  ): { content: string; hasChanges: boolean } {
    let modifiedContent = content;
    let hasChanges = false;

    // Match function declarations and exports
    const functionRegex = /^(?:export\s+)?(?:async\s+)?function\s+(\w+)/gm;
    const arrowFunctionRegex =
      /^(?:export\s+)?const\s+(\w+)\s*=\s*(?:\([^)]*\)\s*=>\s*{|async\s*\([^)]*\)\s*=>\s*{)/gm;

    let match: RegExpExecArray | null;
    const matches: Array<{
      name: string;
      index: number;
      type: 'function' | 'arrow';
    }> = [];

    // Collect all matches first
    while ((match = functionRegex.exec(content)) !== null) {
      matches.push({ name: match[1], index: match.index, type: 'function' });
    }

    // Reset regex
    arrowFunctionRegex.lastIndex = 0;
    while ((match = arrowFunctionRegex.exec(content)) !== null) {
      matches.push({ name: match[1], index: match.index, type: 'arrow' });
    }

    // Sort by index in reverse order to avoid offset issues
    matches.sort((a, b) => b.index - a.index);

    for (const matchData of matches) {
      const lineNumber = this.getLineNumber(modifiedContent, matchData.index);
      const currentLines = modifiedContent.split('\n');

      if (!this.hasJSDocBefore(currentLines, lineNumber - 1)) {
        const jsdoc = this.generateFunctionJSDoc(matchData.name);
        const lineIndex = lineNumber - 1;
        const indentation = this.getIndentation(currentLines[lineIndex]);

        currentLines.splice(
          lineIndex,
          0,
          '',
          `${indentation}/**`,
          `${indentation} * ${jsdoc}`,
          `${indentation} */`,
        );
        modifiedContent = currentLines.join('\n');
        hasChanges = true;
      }
    }

    return { content: modifiedContent, hasChanges };
  }

  private fixInterfaces(
    content: string,
    filePath: string,
    lines: string[],
  ): { content: string; hasChanges: boolean } {
    let modifiedContent = content;
    let hasChanges = false;

    const interfaceRegex = /^(?:export\s+)?interface\s+(\w+)/gm;
    let match: RegExpExecArray | null;
    const matches: Array<{ name: string; index: number }> = [];

    while ((match = interfaceRegex.exec(content)) !== null) {
      matches.push({ name: match[1], index: match.index });
    }

    // Sort by index in reverse order
    matches.sort((a, b) => b.index - a.index);

    for (const matchData of matches) {
      const lineNumber = this.getLineNumber(modifiedContent, matchData.index);
      const currentLines = modifiedContent.split('\n');

      if (!this.hasJSDocBefore(currentLines, lineNumber - 1)) {
        const jsdoc = this.generateInterfaceJSDoc(matchData.name);
        const lineIndex = lineNumber - 1;
        const indentation = this.getIndentation(currentLines[lineIndex]);

        currentLines.splice(
          lineIndex,
          0,
          '',
          `${indentation}/**`,
          `${indentation} * ${jsdoc}`,
          `${indentation} */`,
        );
        modifiedContent = currentLines.join('\n');
        hasChanges = true;
      }
    }

    return { content: modifiedContent, hasChanges };
  }

  private fixTypes(
    content: string,
    filePath: string,
    lines: string[],
  ): { content: string; hasChanges: boolean } {
    let modifiedContent = content;
    let hasChanges = false;

    const typeRegex = /^(?:export\s+)?type\s+(\w+)/gm;
    let match: RegExpExecArray | null;
    const matches: Array<{ name: string; index: number }> = [];

    while ((match = typeRegex.exec(content)) !== null) {
      matches.push({ name: match[1], index: match.index });
    }

    // Sort by index in reverse order
    matches.sort((a, b) => b.index - a.index);

    for (const matchData of matches) {
      const lineNumber = this.getLineNumber(modifiedContent, matchData.index);
      const currentLines = modifiedContent.split('\n');

      if (!this.hasJSDocBefore(currentLines, lineNumber - 1)) {
        const jsdoc = this.generateTypeJSDoc(matchData.name);
        const lineIndex = lineNumber - 1;
        const indentation = this.getIndentation(currentLines[lineIndex]);

        currentLines.splice(
          lineIndex,
          0,
          '',
          `${indentation}/**`,
          `${indentation} * ${jsdoc}`,
          `${indentation} */`,
        );
        modifiedContent = currentLines.join('\n');
        hasChanges = true;
      }
    }

    return { content: modifiedContent, hasChanges };
  }

  private fixClasses(
    content: string,
    filePath: string,
    lines: string[],
  ): { content: string; hasChanges: boolean } {
    let modifiedContent = content;
    let hasChanges = false;

    const classRegex = /^(?:export\s+)?(?:abstract\s+)?class\s+(\w+)/gm;
    let match: RegExpExecArray | null;
    const matches: Array<{ name: string; index: number }> = [];

    while ((match = classRegex.exec(content)) !== null) {
      matches.push({ name: match[1], index: match.index });
    }

    // Sort by index in reverse order
    matches.sort((a, b) => b.index - a.index);

    for (const matchData of matches) {
      const lineNumber = this.getLineNumber(modifiedContent, matchData.index);
      const currentLines = modifiedContent.split('\n');

      if (!this.hasJSDocBefore(currentLines, lineNumber - 1)) {
        const jsdoc = this.generateClassJSDoc(matchData.name);
        const lineIndex = lineNumber - 1;
        const indentation = this.getIndentation(currentLines[lineIndex]);

        currentLines.splice(
          lineIndex,
          0,
          '',
          `${indentation}/**`,
          `${indentation} * ${jsdoc}`,
          `${indentation} */`,
        );
        modifiedContent = currentLines.join('\n');
        hasChanges = true;
      }
    }

    return { content: modifiedContent, hasChanges };
  }

  private generateFunctionJSDoc(name: string): string {
    return `${name} function`;
  }

  private generateInterfaceJSDoc(name: string): string {
    return `${name} interface`;
  }

  private generateTypeJSDoc(name: string): string {
    return `${name} type definition`;
  }

  private generateClassJSDoc(name: string): string {
    return `${name} class`;
  }

  private getIndentation(line: string): string {
    const match = line.match(/^(\s*)/);
    return match ? match[1] : '';
  }

  private hasJSDocBefore(lines: string[], lineIndex: number): boolean {
    // Look backwards for JSDoc comment
    for (let i = lineIndex; i >= 0; i--) {
      const line = lines[i].trim();

      if (line === '') {
        continue;
      }

      if (line === '*/') {
        // Found end of JSDoc, look for beginning
        for (let j = i; j >= 0; j--) {
          if (lines[j].trim().startsWith('/**')) {
            return true;
          }
        }
        return false;
      }

      // If we hit any other content, no JSDoc found
      if (!line.startsWith('*') && !line.startsWith('//')) {
        return false;
      }
    }

    return false;
  }

  private getLineNumber(content: string, index: number): number {
    return content.substring(0, index).split('\n').length;
  }

  async validate(autoFix: boolean = false): Promise<boolean> {
    console.log(
      `🔍 ${autoFix ? 'Auto-fixing and validating' : 'Validating'} JSDoc comments in TypeScript files...\n`,
    );

    try {
      const files = await glob(TS_FILE_PATTERNS, {
        cwd: process.cwd(),
        absolute: true,
      });

      if (files.length === 0) {
        console.log('⚠️  No TypeScript files found to validate');
        return true;
      }

      console.log(
        `Found ${files.length} TypeScript files to ${autoFix ? 'auto-fix' : 'validate'}\n`,
      );

      for (const file of files) {
        this.validateFile(file, autoFix);
      }

      if (autoFix && this.fixes.length > 0) {
        console.log(`✨ Auto-fixing ${this.fixes.length} files...\n`);
        for (const fix of this.fixes) {
          writeFileSync(fix.file, fix.content, 'utf8');
          console.log(`   Fixed: ${fix.file}`);
        }
        console.log('');
      }

      this.printResults(autoFix);
      return this.errors.length === 0;
    } catch (error) {
      console.error('❌ Error during validation:', error);
      return false;
    }
  }

  async fix(): Promise<boolean> {
    return this.validate(true);
  }

  async generateDocs(): Promise<void> {
    console.log('📚 Generating documentation from JSDoc comments...\n');

    try {
      const files = await glob(TS_FILE_PATTERNS, {
        cwd: process.cwd(),
        absolute: true,
      });

      if (files.length === 0) {
        console.log('⚠️  No TypeScript files found to document');
        return;
      }

      const apiDocs = this.extractAPIDocumentation(files);
      await this.updateREADME(apiDocs);

      console.log('✅ Documentation updated successfully!');
    } catch (error) {
      console.error('❌ Error generating documentation:', error);
    }
  }

  private extractAPIDocumentation(files: string[]): APIDocumentation {
    const docs: APIDocumentation = {
      interfaces: [],
      types: [],
      functions: [],
      classes: [],
    };

    for (const file of files) {
      if (!existsSync(file)) continue;

      const content = readFileSync(file, 'utf8');
      const relativePath = relative(process.cwd(), file);

      // Extract interfaces
      docs.interfaces.push(...this.extractInterfaces(content, relativePath));

      // Extract types
      docs.types.push(...this.extractTypes(content, relativePath));

      // Extract functions
      docs.functions.push(...this.extractFunctions(content, relativePath));

      // Extract classes
      docs.classes.push(...this.extractClasses(content, relativePath));
    }

    return docs;
  }

  private extractInterfaces(content: string, filePath: string): InterfaceDoc[] {
    const interfaces: InterfaceDoc[] = [];
    const interfaceRegex =
      /\/\*\*\s*\n((?:\s*\*.*\n)*)\s*\*\/\s*\n(?:export\s+)?interface\s+(\w+)([^{]*)\{([^}]*)\}/gm;
    let match: RegExpExecArray | null;

    while ((match = interfaceRegex.exec(content)) !== null) {
      const [, jsdocContent, name, generics, body] = match;
      const description = this.parseJSDocDescription(jsdocContent);
      const properties = this.parseInterfaceProperties(body);

      interfaces.push({
        name,
        description,
        properties,
        filePath,
        generics: generics.trim() || undefined,
      });
    }

    return interfaces;
  }

  private extractTypes(content: string, filePath: string): TypeDoc[] {
    const types: TypeDoc[] = [];
    const typeRegex =
      /\/\*\*\s*\n((?:\s*\*.*\n)*)\s*\*\/\s*\n(?:export\s+)?type\s+(\w+)(?:<[^>]*>)?\s*=\s*([^;]+);/gm;
    let match: RegExpExecArray | null;

    while ((match = typeRegex.exec(content)) !== null) {
      const [, jsdocContent, name, definition] = match;
      const description = this.parseJSDocDescription(jsdocContent);

      types.push({
        name,
        description,
        definition: definition.trim(),
        filePath,
      });
    }

    return types;
  }

  private extractFunctions(content: string, filePath: string): FunctionDoc[] {
    const functions: FunctionDoc[] = [];
    const functionRegex =
      /\/\*\*\s*\n((?:\s*\*.*\n)*)\s*\*\/\s*\n(?:export\s+)?(?:async\s+)?function\s+(\w+)\s*\(([^)]*)\)\s*:\s*([^{;]+)/gm;
    let match: RegExpExecArray | null;

    while ((match = functionRegex.exec(content)) !== null) {
      const [, jsdocContent, name, params, returnType] = match;
      const {
        description,
        params: paramDocs,
        returns,
      } = this.parseJSDocContent(jsdocContent);

      functions.push({
        name,
        description,
        parameters: this.parseFunctionParameters(params, paramDocs),
        returnType: returnType.trim(),
        returns,
        filePath,
      });
    }

    return functions;
  }

  private extractClasses(content: string, filePath: string): ClassDoc[] {
    const classes: ClassDoc[] = [];
    const classRegex =
      /\/\*\*\s*\n((?:\s*\*.*\n)*)\s*\*\/\s*\n(?:export\s+)?(?:abstract\s+)?class\s+(\w+)(?:<[^>]*>)?(?:\s+extends\s+[^{]+)?\s*\{([^}]*)\}/gm;
    let match: RegExpExecArray | null;

    while ((match = classRegex.exec(content)) !== null) {
      const [, jsdocContent, name, body] = match;
      const description = this.parseJSDocDescription(jsdocContent);
      const methods = this.parseClassMethods(body);

      classes.push({
        name,
        description,
        methods,
        filePath,
      });
    }

    return classes;
  }

  private parseJSDocDescription(jsdocContent: string): string {
    const lines = jsdocContent.split('\n');
    const descriptionLines: string[] = [];

    for (const line of lines) {
      const trimmed = line.replace(/^\s*\*\s?/, '').trim();
      if (trimmed && !trimmed.startsWith('@')) {
        descriptionLines.push(trimmed);
      } else if (trimmed.startsWith('@')) {
        break;
      }
    }

    return descriptionLines.join(' ');
  }

  private parseJSDocContent(jsdocContent: string): {
    description: string;
    params: ParamDoc[];
    returns?: string;
  } {
    const lines = jsdocContent.split('\n');
    const descriptionLines: string[] = [];
    const params: ParamDoc[] = [];
    let returns: string | undefined;

    for (const line of lines) {
      const trimmed = line.replace(/^\s*\*\s?/, '').trim();

      if (trimmed && !trimmed.startsWith('@')) {
        descriptionLines.push(trimmed);
      } else if (trimmed.startsWith('@param')) {
        const paramMatch = trimmed.match(/@param\s+(\w+)\s*-?\s*(.*)/);
        if (paramMatch) {
          params.push({
            name: paramMatch[1],
            description: paramMatch[2],
          });
        }
      } else if (trimmed.startsWith('@returns')) {
        returns = trimmed.replace('@returns', '').trim();
      }
    }

    return {
      description: descriptionLines.join(' '),
      params,
      returns,
    };
  }

  private parseInterfaceProperties(body: string): PropertyDoc[] {
    const properties: PropertyDoc[] = [];
    const propertyRegex = /(\w+)(?:\?)?\s*:\s*([^;]+);/g;
    let match: RegExpExecArray | null;

    while ((match = propertyRegex.exec(body)) !== null) {
      const [, name, type] = match;
      properties.push({
        name,
        type: type.trim(),
        optional: body.includes(`${name}?:`),
      });
    }

    return properties;
  }

  private parseFunctionParameters(
    params: string,
    paramDocs: ParamDoc[],
  ): ParameterDoc[] {
    const parameters: ParameterDoc[] = [];

    if (!params.trim()) return parameters;

    const paramList = params.split(',').map((p) => p.trim());

    for (const param of paramList) {
      const match = param.match(/(\w+)(?:\?)?\s*:\s*(.+)/);
      if (match) {
        const [, name, type] = match;
        const doc = paramDocs.find((p) => p.name === name);

        parameters.push({
          name,
          type: type.trim(),
          optional: param.includes(`${name}?:`),
          description: doc?.description,
        });
      }
    }

    return parameters;
  }

  private parseClassMethods(body: string): MethodDoc[] {
    const methods: MethodDoc[] = [];
    const methodRegex = /(\w+)\s*\([^)]*\)\s*:\s*[^;{]+/g;
    let match: RegExpExecArray | null;

    while ((match = methodRegex.exec(body)) !== null) {
      const [signature, name] = match;
      methods.push({
        name,
        signature: signature.trim(),
      });
    }

    return methods;
  }

  private async updateREADME(docs: APIDocumentation): Promise<void> {
    const readmePath = resolve(process.cwd(), 'README.md');

    if (!existsSync(readmePath)) {
      console.log('⚠️  README.md not found, skipping documentation update');
      return;
    }

    const currentContent = readFileSync(readmePath, 'utf8');
    const apiSection = this.generateAPISection(docs);

    // Find existing API documentation section and replace it, or append if not found
    const apiSectionRegex =
      /## API Documentation[\s\S]*?(?=## (?!API Documentation)|$)/;

    let newContent: string;
    if (apiSectionRegex.test(currentContent)) {
      newContent = currentContent.replace(apiSectionRegex, apiSection);
    } else {
      // Insert before Contributing section if it exists, otherwise append
      const contributingRegex = /## Contributing/;
      if (contributingRegex.test(currentContent)) {
        newContent = currentContent.replace(
          contributingRegex,
          `${apiSection}\n## Contributing`,
        );
      } else {
        newContent = `${currentContent}\n\n${apiSection}`;
      }
    }

    writeFileSync(readmePath, newContent, 'utf8');
    console.log('📝 Updated README.md with API documentation');
  }

  private generateAPISection(docs: APIDocumentation): string {
    const sections: string[] = ['## API Documentation\n'];

    if (docs.interfaces.length > 0) {
      sections.push('### Interfaces\n');
      for (const iface of docs.interfaces) {
        sections.push(`#### \`${iface.name}\`\n`);
        sections.push(`${iface.description}\n`);
        sections.push(`**File:** \`${iface.filePath}\`\n`);

        if (iface.properties.length > 0) {
          sections.push('**Properties:**\n');
          for (const prop of iface.properties) {
            const optional = prop.optional ? '?' : '';
            sections.push(`- \`${prop.name}${optional}: ${prop.type}\`\n`);
          }
        }
        sections.push('');
      }
    }

    if (docs.types.length > 0) {
      sections.push('### Types\n');
      for (const type of docs.types) {
        sections.push(`#### \`${type.name}\`\n`);
        sections.push(`${type.description}\n`);
        sections.push(`**File:** \`${type.filePath}\`\n`);
        sections.push(`**Definition:** \`${type.definition}\`\n`);
        sections.push('');
      }
    }

    if (docs.functions.length > 0) {
      sections.push('### Functions\n');
      for (const func of docs.functions) {
        sections.push(`#### \`${func.name}\`\n`);
        sections.push(`${func.description}\n`);
        sections.push(`**File:** \`${func.filePath}\`\n`);

        if (func.parameters.length > 0) {
          sections.push('**Parameters:**\n');
          for (const param of func.parameters) {
            const optional = param.optional ? '?' : '';
            const desc = param.description ? ` - ${param.description}` : '';
            sections.push(
              `- \`${param.name}${optional}: ${param.type}\`${desc}\n`,
            );
          }
        }

        if (func.returns) {
          sections.push(`**Returns:** ${func.returns}\n`);
        }
        sections.push('');
      }
    }

    if (docs.classes.length > 0) {
      sections.push('### Classes\n');
      for (const cls of docs.classes) {
        sections.push(`#### \`${cls.name}\`\n`);
        sections.push(`${cls.description}\n`);
        sections.push(`**File:** \`${cls.filePath}\`\n`);

        if (cls.methods.length > 0) {
          sections.push('**Methods:**\n');
          for (const method of cls.methods) {
            sections.push(`- \`${method.signature}\`\n`);
          }
        }
        sections.push('');
      }
    }

    return sections.join('\n');
  }

  private printResults(autoFix: boolean = false): void {
    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log('✅ All TypeScript files have proper JSDoc documentation!');
      return;
    }

    if (this.fixes.length > 0 && autoFix) {
      console.log(
        `✅ Auto-fixed ${this.fixes.length} files with missing JSDoc comments!`,
      );
      return;
    }

    if (this.errors.length > 0) {
      console.log(`❌ Found ${this.errors.length} JSDoc errors:\n`);
      this.errors.forEach((error) => {
        console.log(`   ${error.file}:${error.line} - ${error.message}`);
      });
      console.log('');
    }

    if (this.warnings.length > 0) {
      console.log(`⚠️  Found ${this.warnings.length} JSDoc warnings:\n`);
      this.warnings.forEach((warning) => {
        console.log(`   ${warning.file}:${warning.line} - ${warning.message}`);
      });
      console.log('');
    }

    if (!autoFix) {
      console.log(
        'Please add JSDoc comments to the functions, interfaces, types, and classes listed above.',
      );
      console.log(
        'Or run with --fix flag to auto-generate basic JSDoc comments.',
      );
      console.log('JSDoc format example:');
      console.log(`
/**
 * Brief description of what this does
 * @param paramName - Description of parameter
 * @returns Description of return value
 */`);
    }
  }
}

// Run validation if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const validator = new JSDocValidator();
  const hasFixFlag = process.argv.includes('--fix');
  const hasDocsFlag = process.argv.includes('--docs');

  let operation: Promise<boolean | void>;

  if (hasDocsFlag) {
    operation = validator.generateDocs();
  } else if (hasFixFlag) {
    operation = validator.fix();
  } else {
    operation = validator.validate();
  }

  operation
    .then((success) => {
      if (hasDocsFlag) {
        process.exit(0); // generateDocs returns void, so always exit with success
      } else {
        process.exit((success as boolean) ? 0 : 1);
      }
    })
    .catch((error) => {
      console.error('❌ Unexpected error:', error);
      process.exit(1);
    });
}

export { JSDocValidator };
