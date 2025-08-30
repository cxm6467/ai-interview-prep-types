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
  StyleProperties,
  CardPaddingSize,
  CardVariant,
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
 * Enhanced button component props
 */
export interface AppButtonProps {
  /** Button content */
  children: unknown;
  /** Click handler */
  onClick?: () => void;
  /** Extended variant options */
  variant?: ExtendedComponentVariant;
  /** Extended size options */
  size?: ExtendedComponentSize;
  /** Full width flag */
  fullWidth?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Icon element */
  icon?: unknown;
  /** CSS class names */
  className?: string;
  /** Button type */
  type?: ButtonType;
  /** Inline styles */
  style?: StyleProperties;
  /** Accessibility role */
  role?: string;
  /** ARIA selected state */
  'aria-selected'?: boolean;
  /** ARIA controls reference */
  'aria-controls'?: string;
  /** ARIA label */
  'aria-label'?: string;
  /** ARIA labelledby reference */
  'aria-labelledby'?: string;
  /** Tab index */
  tabIndex?: number;
  /** Tooltip title */
  title?: string;
  /** Keyboard event handler */
  onKeyDown?: (event: unknown) => void;
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
  children: unknown;
  /** Extended text variant */
  variant?: ExtendedTextVariant;
  /** Extended text color */
  color?: ExtendedTextColor;
  /** Text alignment */
  align?: TextAlign;
  /** Font weight */
  weight?: FontWeight;
  /** CSS class names */
  className?: string;
  /** HTML element type */
  as?: string;
}
