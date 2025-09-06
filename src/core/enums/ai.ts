/**
 * Available OpenAI models for analysis
 */
export enum OpenAIModel {
  /** GPT-3.5 Turbo model (legacy) */
  GPT_3_5_TURBO = 'gpt-3.5-turbo-0125',
  /** GPT-4 model (legacy) */
  GPT_4 = 'gpt-4',
  /** GPT-4 Turbo model */
  GPT_4_TURBO = 'gpt-4-turbo-preview',
  /** GPT-4o model - multimodal with superior performance */
  GPT_4O = 'gpt-4o',
  /** GPT-4o mini - faster and cheaper version of GPT-4o */
  GPT_4O_MINI = 'gpt-4o-mini',
  /** GPT-4.1 - latest API model with enhanced performance */
  GPT_4_1 = 'gpt-4.1',
  /** GPT-4.1 mini - faster and cheaper than GPT-4o with better performance */
  GPT_4_1_MINI = 'gpt-4.1-mini',
  /** GPT-4.1 nano - fastest and cheapest model with 1M token context */
  GPT_4_1_NANO = 'gpt-4.1-nano',
  /** GPT-5 - smartest, fastest model with built-in reasoning */
  GPT_5 = 'gpt-5',
  /** o3-mini - latest reasoning model with enhanced reasoning abilities */
  O3_MINI = 'o3-mini-20250131',
  /** o4-mini - reasoning model with enhanced quality and performance */
  O4_MINI = 'o4-mini',
}
