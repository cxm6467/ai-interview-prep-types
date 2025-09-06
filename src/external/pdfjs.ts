/**
 * PDF.js integration types and extensions
 */

/**
 * PDF document metadata extracted by PDF.js
 */
export interface PDFDocumentMetadata {
  /** Document title */
  title?: string;
  /** Document author */
  author?: string;
  /** Document subject */
  subject?: string;
  /** Document keywords */
  keywords?: string;
  /** Creation date */
  creationDate?: Date;
  /** Modification date */
  modificationDate?: Date;
  /** PDF version */
  version?: string;
  /** Number of pages */
  numPages: number;
}

/**
 * Extracted text content from a PDF page
 */
export interface PDFPageContent {
  /** Page number (1-indexed) */
  pageNumber: number;
  /** Extracted text content */
  textContent: string;
  /** Text items with positioning information */
  textItems?: PDFTextItem[];
}

/**
 * Individual text item with positioning
 */
export interface PDFTextItem {
  /** Text content */
  str: string;
  /** Font name */
  fontName?: string;
  /** Font size */
  fontSize?: number;
  /** Transform matrix for positioning */
  transform?: number[];
  /** Width of the text */
  width?: number;
  /** Height of the text */
  height?: number;
}

/**
 * Complete PDF parsing result
 */
export interface PDFParsingResult {
  /** Document metadata */
  metadata: PDFDocumentMetadata;
  /** All page contents */
  pages: PDFPageContent[];
  /** Combined text from all pages */
  fullText: string;
  /** Whether parsing was successful */
  success: boolean;
  /** Error message if parsing failed */
  error?: string;
}
