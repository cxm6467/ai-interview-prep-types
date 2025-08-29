# Migration Plan: AI Interview Prep Types

## Overview
This document outlines the plan to extract and migrate TypeScript type definitions from the [ai-interview-prep](https://github.com/cxm6467/ai-interview-prep) repository (develop branch) into this dedicated types package.

## Current State Analysis

### Source Repository Structure
- **Location**: `apps/frontend/src/types/`
- **Main Files**:
  - `index.ts` (6,620 bytes) - Core type definitions
  - `pdfjs-dist.d.ts` (105 bytes) - PDF.js distribution types
  - `pdfjs-worker.d.ts` (117 bytes) - PDF.js worker types  
  - `pdfjs.d.ts` (303 bytes) - PDF.js core types

### Type Categories Identified
1. **Theme & UI Types**: `ThemeType`, `Theme`
2. **Data Models**: `ResumeData`, `ExperienceItem`, `EducationItem`, `JobDescription`
3. **Interview Types**: `InterviewQuestion`, `PresentationTopic`, `SkillMatch`, `ATSScore`
4. **Component Props**: `FileUploadProps`, `ButtonProps`, `CardProps`, `TextProps`
5. **Application State**: `AppState`
6. **PDF.js Extensions**: Custom type definitions for PDF handling

## Migration Strategy

### Phase 1: Setup and Extraction ⏳
**Timeline**: Week 1

#### 1.1 Package Structure Setup
- [ ] Create `src/` directory structure
- [ ] Set up proper TypeScript compilation (`tsconfig.json` updates)
- [ ] Configure build output to `dist/` directory
- [ ] Update `package.json` main entry point

#### 1.2 Type File Extraction
- [ ] Copy `index.ts` from source repository
- [ ] Copy PDF.js type definitions:
  - `pdfjs-dist.d.ts`
  - `pdfjs-worker.d.ts`
  - `pdfjs.d.ts`
- [ ] Organize types into logical modules:
  ```
  src/
  ├── index.ts          # Main export barrel
  ├── core/             # Core data types
  │   ├── resume.ts
  │   ├── interview.ts
  │   └── job.ts
  ├── ui/               # UI component types
  │   ├── components.ts
  │   └── theme.ts
  └── external/         # External library extensions
      └── pdfjs.ts
  ```

#### 1.3 Build System Configuration
- [ ] Update TypeScript compilation target
- [ ] Configure declaration file generation
- [ ] Set up proper module resolution
- [ ] Test build process (`npm run build`)

### Phase 2: Integration and Compatibility ⏳
**Timeline**: Week 2

#### 2.1 Dependency Analysis
- [ ] Identify external dependencies from source types
- [ ] Update `package.json` with required peer dependencies
- [ ] Ensure no circular dependencies

#### 2.2 Type Validation
- [ ] Create test files to validate type correctness
- [ ] Set up type checking in CI pipeline
- [ ] Verify all exported types are accessible

#### 2.3 Documentation Enhancement
- [ ] Add JSDoc comments to all major interfaces
- [ ] Create usage examples for complex types
- [ ] Document breaking changes (if any)

### Phase 3: Source Repository Integration ⏳
**Timeline**: Week 3

#### 3.1 Package Publication
- [ ] Publish initial version to npm registry
- [ ] Verify package installation works correctly
- [ ] Test import statements in isolated environment

#### 3.2 Source Repository Updates
- [ ] Add types package as dependency in main repo
- [ ] Update import statements:
  ```typescript
  // Before
  import type { ResumeData } from '../types';
  
  // After  
  import type { ResumeData } from '@cxm6467/ai-interview-prep-types';
  ```
- [ ] Remove original type files from source repo
- [ ] Update path aliases in `tsconfig.json`

#### 3.3 Testing and Validation
- [ ] Run full test suite in main application
- [ ] Verify TypeScript compilation succeeds
- [ ] Check for any runtime issues
- [ ] Performance impact assessment

### Phase 4: Enhancement and Maintenance ⏳
**Timeline**: Ongoing

#### 4.1 Type Safety Improvements
- [ ] Add stricter type constraints where applicable
- [ ] Implement branded types for IDs
- [ ] Add utility types for common operations

#### 4.2 Tooling Setup
- [ ] Automated type testing with `tsd` or similar
- [ ] Semantic versioning automation
- [ ] Changelog generation for type changes

#### 4.3 Documentation
- [ ] Create comprehensive API documentation
- [ ] Add migration guide for consumers
- [ ] Set up automated documentation generation

## Implementation Commands

### Initial Setup
```bash
# Create source directory structure
mkdir -p src/{core,ui,external}

# Download types from develop branch
curl -o src/index.ts https://raw.githubusercontent.com/cxm6467/ai-interview-prep/develop/apps/frontend/src/types/index.ts
curl -o src/external/pdfjs-dist.d.ts https://raw.githubusercontent.com/cxm6467/ai-interview-prep/develop/apps/frontend/src/types/pdfjs-dist.d.ts
curl -o src/external/pdfjs-worker.d.ts https://raw.githubusercontent.com/cxm6467/ai-interview-prep/develop/apps/frontend/src/types/pdfjs-worker.d.ts
curl -o src/external/pdfjs.d.ts https://raw.githubusercontent.com/cxm6467/ai-interview-prep/develop/apps/frontend/src/types/pdfjs.d.ts
```

### Build and Test
```bash
# Build the package
npm run build

# Test type checking
npx tsc --noEmit

# Format and lint
npm run format
npm run ci
```

### Publication
```bash
# Version bump (after changes)
npm version patch|minor|major

# Publish to npm
npm publish
```

## Risk Assessment

### High Risk
- **Breaking Changes**: Type modifications might break existing code
- **Dependency Issues**: Missing peer dependencies could cause runtime errors

### Medium Risk  
- **Build Complexity**: TypeScript compilation configuration issues
- **Import Resolution**: Path resolution problems in consuming applications

### Low Risk
- **Performance Impact**: Minimal impact expected from external type package
- **Documentation**: Can be improved iteratively

## Success Criteria

### Phase 1 Complete
- [ ] Package builds successfully
- [ ] All types are properly exported
- [ ] No TypeScript compilation errors

### Phase 2 Complete
- [ ] Types package installs correctly
- [ ] All imports resolve without issues
- [ ] Documentation is comprehensive

### Phase 3 Complete
- [ ] Main application uses types package successfully
- [ ] All tests pass in main repository
- [ ] Original type files removed from source

### Final Success
- [ ] Zero TypeScript errors in consuming applications
- [ ] Package follows semantic versioning
- [ ] Automated testing and CI pipeline working
- [ ] Documentation complete and accessible

## Timeline Summary

| Phase | Duration | Key Deliverables |
|-------|----------|------------------|
| Phase 1 | 1 week | Types extracted, package structure setup |
| Phase 2 | 1 week | Integration testing, documentation |
| Phase 3 | 1 week | Source repo integration, validation |
| Phase 4 | Ongoing | Maintenance, enhancements |

**Total Initial Migration**: 3 weeks
**Full Production Ready**: 4-6 weeks