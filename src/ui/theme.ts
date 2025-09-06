/**
 * Available theme variants for basic theme system
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
 * Extended theme types that include application-specific theme variants and accessibility options
 * This is a superset of ThemeType with additional specialized themes
 */
export type ExtendedThemeType =
  | ThemeType
  | 'indigo'
  | 'warm'
  | 'cool'
  | 'high-contrast'
  | 'low-contrast';

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
export interface AppTheme extends Omit<Theme, 'name'> {
  /** Unique identifier for the theme */
  id: ExtendedThemeType;
  /** Theme identifier matching base Theme */
  name: ExtendedThemeType;
  /** Human-readable display name of the theme (e.g., "Ocean Blue") */
  displayName: string;
  /** Human-readable description of the theme */
  description: string;
  /** Theme category for organization */
  category: 'standard' | 'accessible' | 'popular';
  /** CSS class name to apply for styling */
  className: string;
  /** Whether this theme meets accessibility standards */
  accessible: boolean;
}

/**
 * Simplified theme interface for component use without full Theme properties
 *
 * Use this type for theme arrays in components like ThemeSelector where you need
 * theme objects with metadata (not just string values).
 *
 * @example
 * ```typescript
 * // CORRECT: Use SimpleAppTheme[] for theme selector arrays
 * const themes: SimpleAppTheme[] = [
 *   {
 *     id: 'light',
 *     name: 'light',
 *     displayName: 'Light',
 *     description: 'Clean light theme',
 *     category: 'standard',
 *     className: 'theme-light',
 *     accessible: true
 *   }
 * ];
 *
 * // INCORRECT: Don't use ExtendedThemeType[] for objects
 * const wrongThemes: ExtendedThemeType[] = [...]; // This would be for strings only
 * ```
 */
export interface SimpleAppTheme {
  /** Unique identifier for the theme */
  id: ExtendedThemeType;
  /** Theme identifier matching base Theme */
  name: ExtendedThemeType;
  /** Human-readable display name of the theme (e.g., "Ocean Blue") */
  displayName: string;
  /** Human-readable description of the theme */
  description: string;
  /** Theme category for organization */
  category: 'standard' | 'accessible' | 'popular';
  /** CSS class name to apply for styling */
  className: string;
  /** Whether this theme meets accessibility standards */
  accessible: boolean;
}

/**
 * Basic theme constants for ThemeType
 */
export const THEME_VALUES = {
  LIGHT: 'light',
  DARK: 'dark',
  BLUE: 'blue',
  GREEN: 'green',
  PURPLE: 'purple',
  ORANGE: 'orange',
  RED: 'red',
  TEAL: 'teal',
  PINK: 'pink',
} as const;

/**
 * Extended theme constants for ExtendedThemeType
 */
export const EXTENDED_THEME_VALUES = {
  ...THEME_VALUES,
  INDIGO: 'indigo',
  WARM: 'warm',
  COOL: 'cool',
  HIGH_CONTRAST: 'high-contrast',
  LOW_CONTRAST: 'low-contrast',
} as const;

/**
 * Simple theme constants
 */
export const SIMPLE_THEME_VALUES = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

/**
 * Default theme values
 */
export const DEFAULT_THEME = SIMPLE_THEME_VALUES.DARK as 'light' | 'dark';
export const DEFAULT_EXTENDED_THEME =
  EXTENDED_THEME_VALUES.DARK as ExtendedThemeType;

/**
 * Type aliases for commonly confused types to improve clarity
 */

/**
 * Use this for arrays of theme string values
 * @example
 * const themes: ThemeStringArray = ['light', 'dark', 'blue'];
 */
export type ThemeStringArray = ExtendedThemeType[];

/**
 * Use this for arrays of theme objects with metadata
 * @example
 * const themeConfigs: ThemeObjectArray = [
 *   { name: 'light', displayName: 'Light Mode' },
 *   { name: 'dark', displayName: 'Dark Mode' }
 * ];
 */
export type ThemeObjectArray = SimpleAppTheme[];

/**
 * Type guard to check if a value is a valid ExtendedThemeType
 *
 * @param value - The value to check
 * @returns True if the value is a valid ExtendedThemeType
 */
export function isValidThemeType(value: unknown): value is ExtendedThemeType {
  return (
    typeof value === 'string' &&
    Object.values(EXTENDED_THEME_VALUES).includes(value as ExtendedThemeType)
  );
}
