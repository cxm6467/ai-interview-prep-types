import type {
  ComponentSize,
  ComponentVariant,
  TextAlign,
  TextColor,
  TextVariant,
  ButtonType,
} from './types';

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
 * Button component props
 */
export interface ButtonProps extends BaseButtonProps {
  /** Button content */
  children?: unknown;
  /** HTML button type */
  type?: ButtonType;
}

/**
 * Card component props
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
}

/**
 * Text component props
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
}
