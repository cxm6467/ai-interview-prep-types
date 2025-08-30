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
 * CSS style properties
 */
export type StyleProperties = Record<string, unknown>;

/**
 * Card padding size options
 */
export type CardPaddingSize = 'none' | 'small' | 'medium' | 'large';

/**
 * Card variant options
 */
export type CardVariant = 'default' | 'elevated' | 'outlined';

/**
 * CSS style properties without React dependency
 */
export type CSSStyleProperties = Record<string, string | number | undefined>;

/**
 * Mouse event type without React dependency
 */
export type MouseEvent = Event & {
  button: number;
  buttons: number;
  clientX: number;
  clientY: number;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;
};

/**
 * HTML element type without React dependency
 */
export type ElementType = string;

/**
 * React-compatible CSS Properties type
 */
export type ReactCSSProperties = Record<string, string | number | undefined>;

/**
 * React-compatible ElementType
 */
export type ReactElementType = string | Record<string, unknown>;

/**
 * React-compatible MouseEvent for button clicks
 */
export type ReactMouseEvent = Event & {
  currentTarget: unknown;
  target: unknown;
  button: number;
  buttons: number;
  clientX: number;
  clientY: number;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;
  preventDefault: () => void;
  stopPropagation: () => void;
};

/**
 * React-compatible ReactNode type for children
 */
export type ReactNode = string | number | boolean | null | undefined | unknown;

/**
 * React-compatible KeyboardEvent
 */
export type ReactKeyboardEvent = {
  currentTarget: unknown;
  target: unknown;
  key: string;
  keyCode: number;
  which: number;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;
  preventDefault: () => void;
  stopPropagation: () => void;
};
