/**
 * Utility types to replace common 'any' usage patterns
 *
 * These types provide better type safety while maintaining flexibility
 * for scenarios where 'any' might typically be used.
 */

/**
 * Generic object type for configuration or options
 * Use instead of 'any' for configuration objects
 */
export type GenericConfig = Record<string, unknown>;

/**
 * Generic event handler type
 * Use instead of 'any' for event handlers
 */
export type GenericEventHandler<T = Event> = (event: T) => void;

/**
 * Generic data payload type
 * Use instead of 'any' for data payloads
 */
export type DataPayload<T = unknown> = {
  data: T;
  metadata?: GenericConfig;
  timestamp?: string;
};

/**
 * Generic API error type
 * Use instead of 'any' for error objects
 */
export interface GenericError {
  message: string;
  code?: string | number;
  details?: GenericConfig;
  stack?: string;
}

/**
 * Generic form data type
 * Use instead of 'any' for form data
 */
export type FormData<T = GenericConfig> = T & {
  isValid?: boolean;
  errors?: Record<keyof T, string>;
};

/**
 * Generic async operation result
 * Use instead of 'any' for async operations
 */
export type AsyncResult<T = unknown, E = GenericError> =
  | { success: true; data: T }
  | { success: false; error: E };

/**
 * Generic component props type
 * Use instead of 'any' for React component props
 */
export type ComponentProps<T = GenericConfig> = T & {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

/**
 * Type for objects with unknown structure but known to be objects
 * Use instead of 'any' when you know it's an object but not the structure
 */
export type UnknownObject = Record<string, unknown>;

/**
 * Type for arrays with unknown element type
 * Use instead of 'any[]' when you know it's an array
 */
export type UnknownArray = Array<unknown>;
