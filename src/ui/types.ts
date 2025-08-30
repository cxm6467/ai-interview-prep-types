/**
 * Core UI type definitions
 */

/**
 * Size variants for UI components
 */
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Color variants for UI components
 */
export type ComponentVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

/**
 * Text alignment options
 */
export type TextAlign = 'left' | 'center' | 'right' | 'justify';

/**
 * Text color options
 */
export type TextColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'inherit';

/**
 * Text variant/style options
 */
export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline';

/**
 * HTML button types
 */
export type ButtonType = 'button' | 'submit' | 'reset';

/**
 * Extended component variants that include app-specific options
 */
export type ExtendedComponentVariant = ComponentVariant | 'ghost' | 'tertiary';

/**
 * Extended component sizes that include app-specific options
 */
export type ExtendedComponentSize =
  | ComponentSize
  | 'small'
  | 'medium'
  | 'large';

/**
 * Extended text variants that include app-specific options
 */
export type ExtendedTextVariant =
  | TextVariant
  | 'body'
  | 'small'
  | 'caption'
  | 'h4';

/**
 * Extended text colors that include app-specific options
 */
export type ExtendedTextColor = TextColor | 'tertiary' | 'accent';

/**
 * File type mappings for accept attribute
 */
export type FileTypeMappings = Record<string, string[]>;

/**
 * Card padding size options
 */
export type CardPaddingSize = 'none' | 'small' | 'medium' | 'large';

/**
 * Card variant options
 */
export type CardVariant = 'default' | 'elevated' | 'outlined';

/**
 * Re-export React types for components that need them
 */
export type {
  CSSProperties,
  KeyboardEvent,
  MouseEvent,
  ElementType,
  ReactNode,
} from 'react';
