export interface RetryConfig {
  maxRetries: number;
  baseDelay: number;
  enabled: boolean;
}

export class RetryHandler {
  private config: RetryConfig;

  constructor(config: RetryConfig) {
    this.config = config;
  }

  async execute<T>(
    fn: () => Promise<T>,
    retryableErrors: string[] = []
  ): Promise<T> {
    if (!this.config.enabled) {
      return fn();
    }

    let lastError: Error;
    
    for (let attempt = 0; attempt <= this.config.maxRetries; attempt++) {
      try {
        return await fn();
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error));
        
        if (attempt === this.config.maxRetries) {
          break;
        }

        if (retryableErrors.length > 0 && !this.isRetryable(lastError, retryableErrors)) {
          throw lastError;
        }

        const delay = this.calculateDelay(attempt);
        await this.sleep(delay);
      }
    }

    throw lastError!;
  }

  private calculateDelay(attempt: number): number {
    // Exponential backoff with jitter
    const exponentialDelay = this.config.baseDelay * Math.pow(2, attempt);
    const jitter = Math.random() * 1000;
    return exponentialDelay + jitter;
  }

  private isRetryable(error: Error, retryableErrors: string[]): boolean {
    return retryableErrors.some(msg => error.message.includes(msg));
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
