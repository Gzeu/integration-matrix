import { CircuitBreaker } from './circuit-breaker.js';
import { RetryHandler } from './retry-handler.js';
import { APIValidator } from './api-validator.js';
import { PerformanceBenchmark } from './performance-benchmark.js';
import { APIRegistry } from './apis/registry.js';
import type { IntegrationConfig, HealthStatus, BenchmarkResult } from './types.js';

export class IntegrationMatrix {
  private circuitBreaker: CircuitBreaker;
  private retryHandler: RetryHandler;
  private validator: APIValidator;
  private benchmark: PerformanceBenchmark;
  private registry: APIRegistry;
  private config: IntegrationConfig;

  constructor(config: IntegrationConfig) {
    this.config = config;
    this.circuitBreaker = new CircuitBreaker({
      failureThreshold: 5,
      resetTimeout: 60000,
      enabled: config.enableCircuitBreaker
    });
    this.retryHandler = new RetryHandler({
      maxRetries: config.maxRetries || 3,
      baseDelay: 1000,
      enabled: config.enableRetry
    });
    this.validator = new APIValidator();
    this.benchmark = new PerformanceBenchmark();
    this.registry = new APIRegistry();
  }

  async healthCheck(): Promise<Record<string, HealthStatus>> {
    const apis = this.registry.getAllAPIs();
    const results: Record<string, HealthStatus> = {};

    for (const [name, api] of Object.entries(apis)) {
      try {
        const start = Date.now();
        await api.healthCheck();
        results[name] = {
          status: 'healthy',
          responseTime: Date.now() - start,
          timestamp: new Date().toISOString()
        };
      } catch (error) {
        results[name] = {
          status: 'unhealthy',
          error: error instanceof Error ? error.message : 'Unknown error',
          timestamp: new Date().toISOString()
        };
      }
    }

    return results;
  }

  async runBenchmarks(): Promise<Record<string, BenchmarkResult>> {
    const apis = this.registry.getAllAPIs();
    const results: Record<string, BenchmarkResult> = {};

    for (const [name, api] of Object.entries(apis)) {
      results[name] = await this.benchmark.runBenchmark(name, async () => {
        return await api.testEndpoint();
      });
    }

    return results;
  }
}
