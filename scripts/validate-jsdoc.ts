#!/usr/bin/env tsx

import { readFileSync, existsSync } from 'fs';
import { glob } from 'glob';
import { resolve } from 'path';

const TS_FILE_PATTERNS = ['src/**/*.ts', '!src/**/*.d.ts', '!src/**/*.test.ts'];

interface ValidationError {
  file: string;
  line: number;
  message: string;
}

class JSDocValidator {
  private errors: ValidationError[] = [];
  private warnings: ValidationError[] = [];

  validateFile(filePath: string): void {
    if (!existsSync(filePath)) {
      this.errors.push({
        file: filePath,
        line: 0,
        message: 'File not found'
      });
      return;
    }

    const content = readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    this.validateFunctions(content, filePath, lines);
    this.validateInterfaces(content, filePath, lines);
    this.validateTypes(content, filePath, lines);
    this.validateClasses(content, filePath, lines);
  }

  private validateFunctions(content: string, filePath: string, lines: string[]): void {
    // Match function declarations and exports
    const functionRegex = /^(?:export\s+)?(?:async\s+)?function\s+(\w+)/gm;
    const arrowFunctionRegex = /^(?:export\s+)?const\s+(\w+)\s*=\s*(?:\([^)]*\)\s*=>\s*{|async\s*\([^)]*\)\s*=>\s*{)/gm;
    
    let match: RegExpExecArray | null;
    
    // Check regular functions
    while ((match = functionRegex.exec(content)) !== null) {
      const functionName = match[1];
      const lineNumber = this.getLineNumber(content, match.index);
      
      if (!this.hasJSDocBefore(lines, lineNumber - 1)) {
        this.errors.push({
          file: filePath,
          line: lineNumber,
          message: `Function '${functionName}' is missing JSDoc documentation`
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
          message: `Function '${functionName}' is missing JSDoc documentation`
        });
      }
    }
  }

  private validateInterfaces(content: string, filePath: string, lines: string[]): void {
    const interfaceRegex = /^(?:export\s+)?interface\s+(\w+)/gm;
    let match: RegExpExecArray | null;
    
    while ((match = interfaceRegex.exec(content)) !== null) {
      const interfaceName = match[1];
      const lineNumber = this.getLineNumber(content, match.index);
      
      if (!this.hasJSDocBefore(lines, lineNumber - 1)) {
        this.errors.push({
          file: filePath,
          line: lineNumber,
          message: `Interface '${interfaceName}' is missing JSDoc documentation`
        });
      }
    }
  }

  private validateTypes(content: string, filePath: string, lines: string[]): void {
    const typeRegex = /^(?:export\s+)?type\s+(\w+)/gm;
    let match: RegExpExecArray | null;
    
    while ((match = typeRegex.exec(content)) !== null) {
      const typeName = match[1];
      const lineNumber = this.getLineNumber(content, match.index);
      
      if (!this.hasJSDocBefore(lines, lineNumber - 1)) {
        this.errors.push({
          file: filePath,
          line: lineNumber,
          message: `Type '${typeName}' is missing JSDoc documentation`
        });
      }
    }
  }

  private validateClasses(content: string, filePath: string, lines: string[]): void {
    const classRegex = /^(?:export\s+)?(?:abstract\s+)?class\s+(\w+)/gm;
    let match: RegExpExecArray | null;
    
    while ((match = classRegex.exec(content)) !== null) {
      const className = match[1];
      const lineNumber = this.getLineNumber(content, match.index);
      
      if (!this.hasJSDocBefore(lines, lineNumber - 1)) {
        this.errors.push({
          file: filePath,
          line: lineNumber,
          message: `Class '${className}' is missing JSDoc documentation`
        });
      }
    }
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

  async validate(): Promise<boolean> {
    console.log('🔍 Validating JSDoc comments in TypeScript files...\n');

    try {
      const files = await glob(TS_FILE_PATTERNS, { 
        cwd: process.cwd(),
        absolute: true 
      });

      if (files.length === 0) {
        console.log('⚠️  No TypeScript files found to validate');
        return true;
      }

      console.log(`Found ${files.length} TypeScript files to validate\n`);

      for (const file of files) {
        this.validateFile(file);
      }

      this.printResults();
      return this.errors.length === 0;
    } catch (error) {
      console.error('❌ Error during validation:', error);
      return false;
    }
  }

  private printResults(): void {
    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log('✅ All TypeScript files have proper JSDoc documentation!');
      return;
    }

    if (this.errors.length > 0) {
      console.log(`❌ Found ${this.errors.length} JSDoc errors:\n`);
      this.errors.forEach(error => {
        console.log(`   ${error.file}:${error.line} - ${error.message}`);
      });
      console.log('');
    }

    if (this.warnings.length > 0) {
      console.log(`⚠️  Found ${this.warnings.length} JSDoc warnings:\n`);
      this.warnings.forEach(warning => {
        console.log(`   ${warning.file}:${warning.line} - ${warning.message}`);
      });
      console.log('');
    }

    console.log('Please add JSDoc comments to the functions, interfaces, types, and classes listed above.');
    console.log('JSDoc format example:');
    console.log(`
/**
 * Brief description of what this does
 * @param paramName - Description of parameter
 * @returns Description of return value
 */`);
  }
}

// Run validation if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const validator = new JSDocValidator();
  validator.validate().then(success => {
    process.exit(success ? 0 : 1);
  }).catch(error => {
    console.error('❌ Unexpected error:', error);
    process.exit(1);
  });
}

export { JSDocValidator };