import axios from 'axios';
import Joi from 'joi';

export function validateResponse(schema: Joi.ObjectSchema, data: any) {
  const { error } = schema.validate(data, { abortEarly: false });
  if (error) throw new Error('Schema validation failed: ' + error.toString());
}

export async function apiRequest({ method = 'GET', url, params = {}, headers = {}, timeout = 10000, retries = 3, retryDelay = 1000, circuitBreaker }: any) {
  let attempts = 0;
  let lastErr: Error | null = null;
  while (attempts <= retries) {
    try {
      if (circuitBreaker && circuitBreaker.tripped) {
        throw new Error('Circuit breaker: temporarily disabled');
      }
      const res = await axios({ method, url, params, headers, timeout });
      return res.data;
    } catch (err: any) {
      lastErr = err;
      attempts++;
      if (attempts > retries) break;
      await new Promise(r => setTimeout(r, retryDelay * Math.pow(2, attempts - 1)));
    }
  }
  if (circuitBreaker) circuitBreaker.failureCount++;
  throw lastErr || new Error('API request failed');
}

// Example circuit breaker (for advanced use)
export class CircuitBreaker {
  failureCount = 0;
  tripped = false;
  threshold: number;
  resetTimeout: number;
  timeoutHandle: NodeJS.Timeout | null = null;

  constructor(threshold = 5, resetTimeout = 60000) {
    this.threshold = threshold;
    this.resetTimeout = resetTimeout;
  }

  recordFailure() {
    this.failureCount++;
    if (this.failureCount >= this.threshold) {
      this.tripped = true;
      this.timeoutHandle = setTimeout(() => {
        this.tripped = false;
        this.failureCount = 0;
      }, this.resetTimeout);
    }
  }
}
