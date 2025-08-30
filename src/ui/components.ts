import type {
  ComponentSize,
  ComponentVariant,
  TextAlign,
  TextColor,
  TextVariant,
  ButtonType,
  ExtendedComponentVariant,
  ExtendedComponentSize,
  ExtendedTextVariant,
  ExtendedTextColor,
  FileTypeMappings,
  CardPaddingSize,
  CardVariant,
  ElementType,
  CSSProperties,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from './types';

/**
 * File upload validation result
 */
export interface FileValidationResult {
  /** Whether the file is valid */
  isValid: boolean;
  /** Error message if invalid */
  error?: string;
  /** File type detected */
  detectedType?: string;
}

/**
 * Props for file upload component
 */
export interface FileUploadProps {
  /** Accepted file types */
  accept?: string;
  /** Whether multiple files can be selected */
  multiple?: boolean;
  /** Maximum file size in bytes */
  maxSize?: number;
  /** Whether the upload is disabled */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Callback when files are selected */
  onFileSelect: (files: File[]) => void;
  /** Callback when upload fails */
  onError?: (error: string) => void;
  /** Custom placeholder text */
  placeholder?: string;
  /** Additional CSS classes */
  className?: string;
  /** App-specific file validation function */
  validateFile?: (file: File) => FileValidationResult;
  /** App-specific drag and drop styling */
  dragActive?: boolean;
  /** Show progress indicator */
  showProgress?: boolean;
  /** Progress percentage (0-100) */
  progress?: number;
  /** App-specific file preview */
  showPreview?: boolean;
}

/**
 * Base button props
 */
export interface BaseButtonProps {
  /** Button variant */
  variant?: ComponentVariant;
  /** Button size */
  size?: ComponentSize;
  /** Whether button is disabled */
  disabled?: boolean;
  /** Whether button is in loading state */
  loading?: boolean;
  /** Whether button spans full width */
  fullWidth?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

/**
 * App-specific button variants
 */
export type AppButtonVariant =
  | ComponentVariant
  | 'gradient'
  | 'glass'
  | 'animated';

/**
 * Button component props with app-specific extensions
 */
export interface ButtonProps extends BaseButtonProps {
  /** Button content */
  children?: unknown;
  /** HTML button type */
  type?: ButtonType;
  /** App-specific variant */
  appVariant?: AppButtonVariant;
  /** Icon to display before text */
  startIcon?: string;
  /** Icon to display after text */
  endIcon?: string;
  /** Whether to show loading spinner */
  showLoadingSpinner?: boolean;
  /** Custom loading text */
  loadingText?: string;
  /** App-specific tooltip */
  tooltip?: string;
  /** Whether button should pulse on hover */
  pulseOnHover?: boolean;
}

/**
 * App-specific card variants
 */
export type AppCardVariant =
  | 'default'
  | 'outlined'
  | 'filled'
  | 'glass'
  | 'gradient';

/**
 * Card component props with app-specific extensions
 */
export interface CardProps {
  /** Card content */
  children?: unknown;
  /** Card title */
  title?: string;
  /** Card subtitle */
  subtitle?: string;
  /** Whether card has padding */
  padded?: boolean;
  /** Whether card has border */
  bordered?: boolean;
  /** Whether card has shadow */
  elevated?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Click handler for clickable cards */
  onClick?: () => void;
  /** App-specific card variant */
  appVariant?: AppCardVariant;
  /** Card header actions */
  headerActions?: unknown;
  /** Card footer content */
  footer?: unknown;
  /** Whether card is collapsible */
  collapsible?: boolean;
  /** Whether card is initially collapsed */
  defaultCollapsed?: boolean;
  /** Card loading state */
  loading?: boolean;
}

/**
 * Font weight options
 */
export type FontWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

/**
 * Text size options
 */
export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

/**
 * Text transformation options
 */
export type TextTransform = 'none' | 'uppercase' | 'lowercase' | 'capitalize';

/**
 * App-specific text variants
 */
export type AppTextVariant =
  | TextVariant
  | 'gradient'
  | 'outlined'
  | 'shadow'
  | 'glow';

/**
 * Text component props with app-specific extensions
 */
export interface TextProps {
  /** Text content */
  children?: unknown;
  /** Text variant/style */
  variant?: TextVariant;
  /** Text color */
  color?: TextColor;
  /** Text alignment */
  align?: TextAlign;
  /** Whether text should wrap */
  noWrap?: boolean;
  /** Whether text should be truncated with ellipsis */
  truncate?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** App-specific text variant */
  appVariant?: AppTextVariant;
  /** Text weight override */
  weight?: FontWeight;
  /** Text size override */
  size?: TextSize;
  /** Whether text should animate on appear */
  animated?: boolean;
  /** Text transformation */
  transform?: TextTransform;
}

/**
 * Enhanced file upload component props
 */
export interface AppFileUploadProps {
  /** Drag and drop callback */
  onDrop: (files: File[]) => void;
  /** Currently selected file */
  file?: File | null;
  /** Accepted file types mapping */
  accept?: FileTypeMappings;
  /** Maximum number of files */
  maxFiles?: number;
  /** Label text */
  label?: string;
  /** Description text */
  description?: string;
  /** CSS class names */
  className?: string;
  /** Child components */
  children?: unknown;
}

/**
 * Enhanced button component props with proper ARIA support and event handlers
 */
export interface AppButtonProps {
  /** Button content */
  children?: ReactNode;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'tertiary';
  /** Button size */
  size?: 'sm' | 'md' | 'lg' | 'small' | 'medium' | 'large';
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is in loading state */
  loading?: boolean;
  /** Whether the button should take full width of its container */
  fullWidth?: boolean;
  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';
  /** Additional CSS class names */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;

  // ARIA attributes
  role?: string;
  title?: string;
  tabIndex?: number;
  'aria-selected'?: boolean | 'true' | 'false';
  'aria-controls'?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-expanded'?: boolean | 'true' | 'false';
  'aria-haspopup'?:
    | boolean
    | 'true'
    | 'false'
    | 'menu'
    | 'listbox'
    | 'tree'
    | 'grid'
    | 'dialog';

  // Event handlers
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
}

/**
 * Enhanced card component props
 */
export interface AppCardProps {
  /** Card content */
  children: unknown;
  /** CSS class names */
  className?: string;
  /** Padding size options */
  padding?: CardPaddingSize;
  /** Card style variant */
  variant?: CardVariant;
  /** Click handler */
  onClick?: () => void;
}

/**
 * Enhanced text component props
 */
export interface AppTextProps {
  /** Text content */
  children?: unknown;
  /** Text variant/style */
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'overline'
    | 'small';
  /** Text color */
  color?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'success'
    | 'info'
    | 'accent'
    | 'tertiary';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Font weight */
  weight?: 'light' | 'normal' | 'medium' | 'bold';
  /** Additional CSS classes */
  className?: string;
  /** HTML element type */
  as?: ElementType;
}

/**
 * Skill bubble component props
 *
 * @example
 * // Usage with children
 * <AppSkillBubble variant="success">React</AppSkillBubble>
 *
 * @example
 * // Usage with skill prop (legacy)
 * <AppSkillBubble skill="TypeScript" variant="warning" />
 */
export interface AppSkillBubbleProps {
  /** The skill text to display (alternative to children) */
  skill?: string;
  /** Visual variant of the bubble */
  variant?: 'success' | 'warning';
  /** Additional CSS class names */
  className?: string;
  /** The content of the bubble (alternative to skill prop) */
  children?: ReactNode;
}
