import type { AnalysisRequestBody } from './analysis';
import type { Theme, ThemeType } from '../ui';

/**
 * Extended theme configuration with app-specific properties
 */
export interface CoreAppTheme extends Theme {
  /** App-specific branding colors */
  brand: {
    primary: string;
    secondary: string;
    accent: string;
  };
  /** App-specific spacing multipliers */
  appSpacing: {
    multiplier: number;
    gutters: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  };
  /** App-specific animation settings */
  animations: {
    duration: {
      fast: string;
      normal: string;
      slow: string;
    };
    easing: string;
  };
}

/**
 * Extended theme types including app-specific variants
 */
export type AppThemeType = ThemeType | 'auto' | 'system' | 'high-contrast';

/**
 * Application configuration and settings
 */
export interface AppConfig {
  /** Current theme configuration */
  theme: CoreAppTheme;
  /** Selected theme type */
  themeType: AppThemeType;
  /** Application version */
  version: string;
  /** Feature flags */
  features: {
    enableAdvancedAnalysis: boolean;
    enableExperimentalUI: boolean;
    enableAnalytics: boolean;
  };
  /** User preferences */
  preferences: {
    autoSave: boolean;
    showTips: boolean;
    language: string;
    timezone: string;
  };
  /** Debug settings */
  debug: {
    enabled: boolean;
    logLevel: 'error' | 'warn' | 'info' | 'debug';
    showPerformanceMetrics: boolean;
  };
}

/**
 * Alias for AnalysisRequestBody for backwards compatibility
 */
export type RequestBody = AnalysisRequestBody;
