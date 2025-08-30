/**
 * Available theme variants
 */
export type ThemeType =
  | 'light'
  | 'dark'
  | 'blue'
  | 'green'
  | 'purple'
  | 'orange'
  | 'red'
  | 'teal'
  | 'pink';

/**
 * Extended theme types that include application-specific theme variants
 */
export type ExtendedThemeType =
  | ThemeType
  | 'indigo'
  | 'high-contrast'
  | 'low-contrast'
  | 'warm'
  | 'cool';

/**
 * Color palette for themes
 */
export interface ThemeColors {
  /** Primary brand color */
  primary: string;
  /** Secondary accent color */
  secondary: string;
  /** Background color */
  background: string;
  /** Surface color (cards, panels) */
  surface: string;
  /** Primary text color */
  text: string;
  /** Secondary text color */
  textSecondary: string;
  /** Border color */
  border: string;
  /** Success state color */
  success: string;
  /** Warning state color */
  warning: string;
  /** Error state color */
  error: string;
  /** Info state color */
  info: string;
}

/**
 * Typography configuration
 */
export interface ThemeTypography {
  /** Base font family */
  fontFamily: string;
  /** Monospace font family for code */
  fontFamilyMono: string;
  /** Base font size */
  fontSize: string;
  /** Line height */
  lineHeight: string;
}

/**
 * Spacing configuration
 */
export interface ThemeSpacing {
  /** Extra small spacing */
  xs: string;
  /** Small spacing */
  sm: string;
  /** Medium spacing */
  md: string;
  /** Large spacing */
  lg: string;
  /** Extra large spacing */
  xl: string;
}

/**
 * Border radius configuration
 */
export interface ThemeBorderRadius {
  /** Small radius */
  sm: string;
  /** Medium radius */
  md: string;
  /** Large radius */
  lg: string;
  /** Full radius (circular) */
  full: string;
}

/**
 * Shadow configuration
 */
export interface ThemeShadows {
  /** Small shadow */
  sm: string;
  /** Medium shadow */
  md: string;
  /** Large shadow */
  lg: string;
}

/**
 * Theme configuration interface
 */
export interface Theme {
  /** Theme identifier */
  name: ThemeType;
  /** Display name for the theme */
  displayName: string;
  /** Primary color palette */
  colors: ThemeColors;
  /** Typography settings */
  typography: ThemeTypography;
  /** Spacing values */
  spacing: ThemeSpacing;
  /** Border radius values */
  borderRadius: ThemeBorderRadius;
  /** Shadow values */
  shadows: ThemeShadows;
}

/**
 * Application theme configuration that extends the base Theme
 */
export interface AppTheme extends Theme {
  /** Unique identifier for the theme */
  id: ExtendedThemeType;
  /** Human-readable description of the theme */
  description: string;
  /** Theme category for organization */
  category: 'standard' | 'accessible' | 'popular';
  /** CSS class name to apply for styling */
  className: string;
  /** Whether this theme meets accessibility standards */
  accessible: boolean;
}
