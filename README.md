# **AI Interview Prep Types**

[![npm version](https://badge.fury.io/js/%40cxm6467%2Fai-interview-prep-types.svg)](https://badge.fury.io/js/%40cxm6467%2Fai-interview-prep-types)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue.svg)](https://www.typescriptlang.org/)

Shared TypeScript type definitions for the [ai-interview-prep](https://github.com/cxm6467/ai-interview-prep) application ecosystem.

## Overview

This package provides comprehensive TypeScript type definitions for the AI Interview Prep application, including:

- **Core Data Models**: Resume data, job descriptions, experience items
- **Interview Types**: Questions, presentation topics, skill matches
- **UI Component Props**: Button, card, text, and file upload components
- **Application State**: Theme management and app state interfaces
- **Utility Types**: ATS scoring, candidate questions, and more

## Project Structure

```
ai-interview-prep-types/
├── README.md                 # Project documentation
├── package.json             # Package configuration and dependencies
├── tsconfig.json            # TypeScript configuration
├── commitlint.config.js     # Commit linting configuration
├── src/                     # Source code
│   ├── index.ts            # Main entry point for exports
│   └── types.ts            # Type definitions (to be populated)
├── dist/                    # Compiled JavaScript output (generated)
├── docs/                    # Documentation
│   └── MIGRATION_PLAN.md   # Migration strategy documentation
└── tests/                   # Test files (to be added)
```

## Installation

```bash
npm install @cxm6467/ai-interview-prep-types
```

## Usage

```typescript
import type {
  ResumeData,
  InterviewQuestion,
  JobDescription,
  AppState,
  Theme,
} from '@cxm6467/ai-interview-prep-types';

// Use the types in your application
const resumeData: ResumeData = {
  // ... your resume data
};

const question: InterviewQuestion = {
  // ... your interview question
};
```

## Migration Plan

This package is being created to extract and centralize type definitions from the main [ai-interview-prep](https://github.com/cxm6467/ai-interview-prep) repository (develop branch).

### Phase 1: Type Extraction

- [ ] Extract core type definitions from `apps/frontend/src/types/index.ts`
- [ ] Extract PDF.js type definitions
- [ ] Set up proper TypeScript compilation and build process

### Phase 2: Package Integration

- [ ] Update main application to use this types package
- [ ] Ensure backward compatibility
- [ ] Update import statements across the application

### Phase 3: Enhancement

- [ ] Add comprehensive JSDoc documentation
- [ ] Set up automated testing for type definitions
- [ ] Implement semantic versioning for type changes

## Development

### Getting Started

```bash
# Clone the repository
git clone https://github.com/cxm6467/ai-interview-prep-types.git
cd ai-interview-prep-types

# Install dependencies
npm install

# Build the package
npm run build

# Format code
npm run format

# Check formatting
npm run format:check

# Run CI checks (build + format check)
npm run ci
```

### Package Scripts

- `npm run build` - Compiles TypeScript to JavaScript in the `dist/` directory
- `npm run format` - Formats code using Prettier
- `npm run format:check` - Checks if code is formatted correctly
- `npm run ci` - Runs build and format check (used in CI/CD)
- `npm run test` - Placeholder for future tests

### Development Workflow

1. **Type Definitions**: Add new types in `src/types.ts`
2. **Exports**: Update `src/index.ts` to export new types
3. **Build**: Run `npm run build` to compile TypeScript
4. **Format**: Run `npm run format` to ensure consistent formatting
5. **Commit**: Use conventional commit messages (enforced by commitlint)

## Current Status

⚠️ **Early Development**: This package is currently in early development phase. The type definitions are not yet implemented but the infrastructure is in place.

### What's Ready

- ✅ Package structure and build system
- ✅ TypeScript configuration
- ✅ Code formatting with Prettier
- ✅ Commit linting with conventional commits
- ✅ Git hooks with Husky

### What's Coming

- 🔄 Core type definitions extraction
- 🔄 Comprehensive JSDoc documentation
- 🔄 Unit tests for type validation
- 🔄 Automated publishing workflow

## API Documentation

### Interfaces

#### `TestInterface`

TestInterface interface

**File:** `src/core/interview.ts`

**Properties:**

- `id: string`

- `name: string`


### Functions

#### `testFunction`

testFunction function

**File:** `src/core/interview.ts`

## Interfaces

#### `TestInterface`

TestInterface interface

**File:** `src/core/interview.ts`

**Properties:**

- `id: string`

- `name: string`

### Functions

#### `testFunction`

testFunction function

**File:** `src/core/interview.ts`

## Interfaces

#### `TestInterface`

TestInterface interface

**File:** `src/core/interview.ts`

**Properties:**

- `id: string`

- `name: string`

### Functions

#### `testFunction`

testFunction function

**File:** `src/core/interview.ts`

## Interfaces

#### `TestInterface`

TestInterface interface

**File:** `src/core/interview.ts`

**Properties:**

- `id: string`

- `name: string`

### Functions

#### `testFunction`

testFunction function

**File:** `src/core/interview.ts`

## Interfaces

#### `TestInterface`

TestInterface interface

**File:** `src/core/interview.ts`

**Properties:**

- `id: string`

- `name: string`

### Functions

#### `testFunction`

testFunction function

**File:** `src/core/interview.ts`

## Interfaces

#### `TestInterface`

TestInterface interface

**File:** `src/core/interview.ts`

**Properties:**

- `id: string`

- `name: string`

### Functions

#### `testFunction`

testFunction function

**File:** `src/core/interview.ts`

## Interfaces

#### `TestInterface`

TestInterface interface

**File:** `src/core/interview.ts`

**Properties:**

- `id: string`

- `name: string`

### Functions

#### `testFunction`

testFunction function

**File:** `src/core/interview.ts`

## Interfaces

#### `TestInterface`

Test interface for interview preparation types

**File:** `src/core/interview.ts`

**Properties:**

- `id: string`

- `name: string`

### Functions

#### `testFunction`

Test function for development purposes

**File:** `src/core/interview.ts`

## Contributing

This package follows conventional commits and includes automated commit linting. Please ensure your commits follow the conventional commit format.

## License

ISC © Chris Marasco
