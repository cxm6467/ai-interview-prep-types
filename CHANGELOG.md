# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.2] - 2025-08-30

### Fixed

- **TypeScript Compilation**: Enhanced package publishing with proper TypeScript declaration files
  - Updated `package.json` to include `"types": "./dist/index.d.ts"` field for TypeScript consumers
  - Updated main entry point to `"./dist/index.js"` for compiled JavaScript output
  - Ensured TypeScript declaration files (.d.ts) and JavaScript files (.js) are properly generated in dist/ directory
  - Improved package compatibility for both JavaScript and TypeScript consumers

## [1.1.0] - 2025-08-30

### Added

- **Enhanced JSDoc Documentation**: Comprehensive documentation with usage examples for all types
  - Added detailed descriptions for all interfaces and properties
  - Included practical code examples for better developer experience
  - Enhanced parameter documentation with expected formats and use cases
- **Latest OpenAI Models Support**: Updated AI model definitions to include 2025 models
  - Added GPT-4o and GPT-4o mini for multimodal capabilities
  - Added GPT-4.1, GPT-4.1 mini, and GPT-4.1 nano for enhanced performance
  - Added GPT-5 with built-in reasoning capabilities
  - Added o3-mini and o4-mini reasoning models
  - Marked legacy models (GPT-3.5, GPT-4) with deprecation notes
- **UI Type Organization**: Extracted inline types to dedicated type files
  - Created `src/ui/types.ts` for core UI type definitions
  - Separated `ComponentSize`, `ComponentVariant`, `TextAlign`, `TextColor`, `TextVariant`, and `ButtonType`
  - Improved type reusability and maintainability

### Changed

- **Type Extraction**: Moved inline union types to proper type definitions for better reusability
- **Component Props**: Updated UI component interfaces to use extracted common types
- **JSDoc Quality**: Enhanced all interface documentation with practical examples and detailed descriptions

### Improved

- **Developer Experience**: Better IntelliSense and documentation in IDEs
- **Type Safety**: More explicit type definitions reduce ambiguity
- **Documentation Coverage**: All public types now have comprehensive documentation

## [1.0.0] - 2025-08-30

### Added

- **Modular Architecture**: Complete reorganization of types into domain-specific modules
  - `src/core/analysis/` - Analysis and ATS scoring types
  - `src/core/enums/` - Application enums categorized by domain
  - `src/core/` - Core business logic types (interview, job, resume, state)
  - `src/ui/` - UI component prop definitions and theming
  - `src/external/` - External service integration types
- **New Core Types**:
  - `InterviewQuestion` - Enhanced with category and difficulty metadata
  - `JobDescription` - Comprehensive job posting structure
  - `ResumeData` - Complete resume data parsing structure
  - `AppState` - Application state management interfaces
  - `SkillMatch` - Job-resume skill matching and scoring
  - `PresentationTopic` - Interview presentation requirements
  - `CandidateQuestion` - Questions candidates should ask
- **Enhanced Analysis Types**:
  - `AnalysisRequestBody` - Structured API request types
  - `PartialAnalysisResult` - Support for incremental analysis
  - `AnalysisProgress` - Real-time progress tracking
  - `AnalysisError` - Comprehensive error handling
- **UI Component Types**:
  - `ButtonProps`, `CardProps`, `TextProps` - Component property interfaces
  - `FileUploadProps` - File upload component specifications
  - `Theme` system with colors, typography, spacing, and shadows
  - `ComponentSize` and `ComponentVariant` - Common UI variants
- **External Integration Types**:
  - `PDFParsingResult` - PDF.js integration with metadata
  - `PDFDocumentMetadata` - Document information extraction
  - `PDFPageContent` - Page-by-page content parsing
- **Comprehensive Documentation**:
  - JSDoc comments for all public interfaces
  - Updated README with usage examples and API reference
  - Modular import/export structure

### Changed

- **Breaking**: Reorganized entire type structure from single file to modular architecture
- **Breaking**: `Question` interface renamed to `InterviewQuestion` with additional properties
- **Breaking**: Enhanced `ATSScore` interface with optional feedback field
- **Breaking**: Removed React dependency - consumers should import `ReactNode` from React
- Improved type safety by removing `any` types throughout codebase
- Enhanced `AnalysisResult` interface with more comprehensive data structure
- Updated export structure to support both named and namespace imports

### Fixed

- Resolved duplicate type export conflicts between modules
- Fixed TypeScript compilation errors with proper type-only imports
- Corrected spellcheck issues in documentation
- Improved type inference and IDE support

### Removed

- `src/types.ts` - Replaced with modular structure
- Direct React dependencies from type definitions
- Legacy interfaces that were not properly documented

## [0.0.2] - 2025-08-29

### Added

- Pre-commit hooks with Husky for code quality
- Spell checking with cspell
- JSDoc validation scripts
- Git hooks for automated formatting and linting

### Changed

- Enhanced package.json with additional development scripts
- Improved CI/CD pipeline configuration

## [0.0.1] - 2025-08-28

### Added

- Initial project setup and infrastructure
- TypeScript compilation configuration
- Prettier code formatting
- Conventional commit linting with commitlint
- Basic package structure and build system
- ISC license and initial package metadata

---

## Migration Guide

### Upgrading from 0.x to 1.0.0

**Import Changes:**

```typescript
// Old (0.x)
import { Question, RequestBody } from '@cxm6467/ai-interview-prep-types';

// New (1.0.0)
import type {
  InterviewQuestion,
  AnalysisRequestBody,
} from '@cxm6467/ai-interview-prep-types';
```

**Interface Changes:**

```typescript
// Old Question interface
interface Question {
  question: string;
  answer: string;
}

// New InterviewQuestion interface
interface InterviewQuestion {
  question: string;
  answer: string;
  category?: 'technical' | 'behavioral' | 'situational' | 'general';
  difficulty?: 'easy' | 'medium' | 'hard';
}
```

**Module-Specific Imports:**

```typescript
// Import from specific modules for tree-shaking
import type {
  AnalysisResult,
  ATSScore,
} from '@cxm6467/ai-interview-prep-types/core/analysis';

import type { Theme, ButtonProps } from '@cxm6467/ai-interview-prep-types/ui';
```

For detailed migration assistance, see the updated README.md examples and API reference.
