# **AI Interview Prep Types**

[![npm version](https://badge.fury.io/js/@cxm6467%2Fai-interview-prep-types.svg)](https://badge.fury.io/js/@cxm6467%2Fai-interview-prep-types)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue.svg)](https://www.typescriptlang.org/)

Comprehensive TypeScript type definitions for the [ai-interview-prep](https://github.com/cxm6467/ai-interview-prep) application ecosystem.

## Overview

This package provides a complete suite of TypeScript type definitions for AI-powered interview preparation applications, organized in a modular structure for easy consumption and maintenance.

### Key Features

- **Modular Architecture**: Types organized by domain (core, UI, external integrations)
- **Complete Type Coverage**: Interview questions, resume data, job descriptions, and more
- **ATS Integration**: Types for Applicant Tracking System compatibility scoring
- **UI Components**: Comprehensive component prop definitions with extracted common types
- **State Management**: Application state and progress tracking interfaces
- **External Integrations**: PDF.js and other third-party service types
- **Enhanced JSDoc**: Comprehensive documentation with examples for all types
- **Latest OpenAI Models**: Support for GPT-4o, GPT-4.1, GPT-5, and reasoning models

## Installation

```bash
npm install @cxm6467/ai-interview-prep-types
```

## Quick Start

```typescript
import type {
  // Core analysis types
  AnalysisResult,
  ATSScore,

  // Interview and job types
  InterviewQuestion,
  JobDescription,
  ResumeData,

  // Application state
  AppState,
  AnalysisProgress,

  // Theme types and constants
  AppTheme,
  ExtendedThemeType,
  THEME_VALUES,
  SIMPLE_THEME_VALUES,
  DEFAULT_THEME,

  // Component props
  AppButtonProps,
  AppTextProps,
  AppCardProps,

  // App-specific types
  RequestBody,

  // UI component props
  ButtonProps,
  CardProps,
  TextProps,
  FileUploadProps,
  Theme,

  // Extracted type definitions
  SkillImportanceLevel,
  InterviewTiming,
  FontWeight,
  TextSize,
} from '@cxm6467/ai-interview-prep-types';

// Example usage
const analysisResult: AnalysisResult = {
  atsScore: {
    score: 85,
    strengths: ['Strong technical keywords', 'Clear experience section'],
    improvements: ['Add more quantified achievements'],
    keywordMatches: ['React', 'TypeScript', 'Node.js'],
    missingKeywords: ['AWS', 'Docker'],
  },
  technicalQuestions: [
    {
      question:
        'Explain the difference between TypeScript interfaces and types',
      answer: 'Interfaces are...',
      category: 'technical',
      difficulty: 'medium',
    },
  ],
  // ... other properties
};
```

## Project Structure

```
ai-interview-prep-types/
├── src/
│   ├── core/                     # Core business logic types
│   │   ├── analysis/             # Analysis and scoring types
│   │   │   ├── types.ts         # Analysis results, ATS scoring
│   │   │   ├── requests.ts      # API request bodies
│   │   │   └── index.ts         # Analysis module exports
│   │   ├── enums/               # Application enums
│   │   │   ├── analysis.ts      # Analysis-specific enums
│   │   │   ├── infrastructure.ts # Infrastructure enums
│   │   │   ├── ai.ts           # AI model enums
│   │   │   └── index.ts        # Enum module exports
│   │   ├── app.ts              # App-specific theme and configuration types
│   │   ├── cache.ts            # Cache entry interfaces and metadata
│   │   ├── interview.ts         # Interview question types
│   │   ├── job.ts              # Job description and matching
│   │   ├── progress.ts         # Progress tracking
│   │   ├── resume.ts           # Resume data structures
│   │   ├── server.ts           # Server response types
│   │   ├── state.ts            # Application state management
│   │   └── utils.ts            # Utility types and type safety helpers
│   ├── ui/                      # UI component types
│   │   ├── types.ts           # Core UI type definitions
│   │   ├── components.ts      # Component prop definitions
│   │   ├── theme.ts          # Theme and styling types
│   │   └── index.ts          # UI module exports
│   ├── external/               # External service integrations
│   │   ├── pdfjs.ts          # PDF.js integration types
│   │   └── index.ts          # External module exports
│   └── index.ts               # Main package exports
├── CHANGELOG.md               # Version history and changes
└── README.md                 # This file
```

## Type Categories

### Core Types

#### Analysis & Scoring

- `AnalysisResult` - Complete analysis results
- `ATSScore` - ATS compatibility scoring
- `PartialAnalysisResult` - Partial analysis results
- `AnalysisRequestBody` - API request structures

#### Interview & Job Matching

- `InterviewQuestion` - Interview questions with metadata
- `JobDescription` - Structured job posting data
- `SkillMatch` - Skill matching and scoring
- `ResumeData` - Parsed resume information

#### Application State

- `AppState` - Main application state
- `AnalysisProgress` - Analysis progress tracking
- `AppSettings` - User preferences and settings

#### Additional Core Types

- `CoreAppTheme` - Extended app-specific theme configuration
- `CacheEntry` - Cache interfaces for storing analysis results
- `SafeObject`, `FlexibleRecord` - Utility types for type safety

### UI Types

- `ButtonProps`, `CardProps`, `TextProps` - Component properties
- `Theme`, `ThemeColors`, `ThemeTypography` - Theming system
- `ComponentSize`, `ComponentVariant` - Common UI variants

### External Integration Types

- `PDFParsingResult` - PDF.js parsing results
- `PDFDocumentMetadata` - PDF document information

## Usage Examples

### Analysis Workflow

```typescript
import type {
  AnalysisRequestBody,
  AnalysisResult,
  AnalysisProgress,
} from '@cxm6467/ai-interview-prep-types';

// API request
const request: AnalysisRequestBody = {
  resumeText: 'Software Engineer with 5 years...',
  jobDescription: 'We are looking for a Senior...',
};

// Progress tracking
const progress: AnalysisProgress = {
  phase: AnalysisPhase.GENERATING_QUESTIONS,
  completionPercentage: 65,
  message: 'Generating interview questions...',
};
```

### Component Props

```typescript
import type { ButtonProps, Theme } from '@cxm6467/ai-interview-prep-types';

const MyButton: React.FC<AppButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
}) => {
  // Component implementation
};
```

### Theme Constants

```typescript
import {
  DEFAULT_THEME,
  SIMPLE_THEME_VALUES,
  THEME_VALUES,
  ExtendedThemeType,
} from '@cxm6467/ai-interview-prep-types';

// Use constants instead of magic strings
const store = {
  theme: DEFAULT_THEME,
  toggleTheme: () =>
    set((state) => ({
      theme:
        state.theme === SIMPLE_THEME_VALUES.DARK
          ? SIMPLE_THEME_VALUES.LIGHT
          : SIMPLE_THEME_VALUES.DARK,
    })),
  reset: () =>
    set({
      theme: DEFAULT_THEME,
    }),
};

// Available theme constants
THEME_VALUES.LIGHT; // 'light'
THEME_VALUES.DARK; // 'dark'
THEME_VALUES.BLUE; // 'blue'
THEME_VALUES.INDIGO; // 'indigo'
THEME_VALUES.GREEN; // 'green'
THEME_VALUES.WARM; // 'warm'
THEME_VALUES.COOL; // 'cool'
THEME_VALUES.HIGH_CONTRAST; // 'high-contrast'
THEME_VALUES.LOW_CONTRAST; // 'low-contrast'
```

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

# Run all validation checks
npm run ci
```

### Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run docs:validate` - Validate JSDoc documentation
- `npm run format` - Format code with Prettier
- `npm run spellcheck` - Check spelling in code and docs
- `npm run ci` - Run all checks (build, format, spellcheck)
- `npm test` - Run tests (placeholder for future implementation)

### Development Guidelines

1. **Type Organization**: Follow the modular structure by domain
2. **Documentation**: All public types must have comprehensive JSDoc comments
3. **Naming**: Use clear, descriptive names that reflect the business domain
4. **Exports**: Update appropriate index.ts files when adding new types
5. **Versioning**: Follow semantic versioning for breaking changes

## API Reference

### Core Analysis Types

All analysis-related types for processing resumes and job descriptions.

**Key Interfaces:**

- `AnalysisResult` - Complete analysis with ATS scoring and interview questions
- `ATSScore` - Applicant Tracking System compatibility analysis
- `InterviewQuestion` - Interview questions with category and difficulty
- `JobDescription` - Structured job posting with requirements and skills

### State Management Types

Application state and progress tracking interfaces.

**Key Interfaces:**

- `AppState` - Main application state container
- `AnalysisProgress` - Real-time analysis progress updates
- `AppSettings` - User preferences and configuration

### UI Component Types

Props and styling types for React components.

**Key Interfaces:**

- Component Props: `ButtonProps`, `CardProps`, `TextProps`, `FileUploadProps`
- Theming: `Theme`, `ThemeColors`, `ThemeTypography`
- Common Types: `ComponentSize`, `ComponentVariant`

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for detailed version history.

## Contributing

This package follows conventional commits and includes automated validation:

- **Commit Format**: Use conventional commit messages (enforced by commitlint)
- **Documentation**: All public APIs must have JSDoc comments
- **Testing**: Ensure TypeScript compilation passes
- **Formatting**: Code is automatically formatted with Prettier

## License

ISC © Chris Marasco

[![AI-Assisted](https://img.shields.io/badge/AI%20Assisted-Claude%20by%20Anthropic-blue)](https://www.anthropic.com)
