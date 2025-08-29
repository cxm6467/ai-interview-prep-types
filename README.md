# **AI Interview Prep Types**

[![npm version](https://badge.fury.io/js/%40cxm6467%2Fai-interview-prep-types.svg)](https://badge.fury.io/js/%40cxm6467%2Fai-interview-prep-types)
[![Build Status](https://github.com/cxm6467/ai-interview-prep-types/workflows/CI/badge.svg)](https://github.com/cxm6467/ai-interview-prep-types/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue.svg)](https://www.typescriptlang.org/)

Shared TypeScript type definitions for the [ai-interview-prep](https://github.com/cxm6467/ai-interview-prep) application ecosystem.

## Overview

This package provides comprehensive TypeScript type definitions for the AI Interview Prep application, including:

- **Core Data Models**: Resume data, job descriptions, experience items
- **Interview Types**: Questions, presentation topics, skill matches
- **UI Component Props**: Button, card, text, and file upload components
- **Application State**: Theme management and app state interfaces
- **Utility Types**: ATS scoring, candidate questions, and more

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

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Format code
npm run format

# Run CI checks
npm run ci
```

## Contributing

This package follows conventional commits and includes automated commit linting. Please ensure your commits follow the conventional commit format.

## License

ISC © Chris Marasco
