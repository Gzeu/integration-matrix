export interface IntegrationConfig {
  enableCircuitBreaker: boolean;
  enableRetry: boolean;
  enableBenchmark: boolean;
  maxRetries?: number;
  timeout?: number;
}

export interface HealthStatus {
  status: 'healthy' | 'unhealthy';
  responseTime?: number;
  error?: string;
  timestamp: string;
}

export interface BenchmarkResult {
  apiName: string;
  totalRequests: number;
  successfulRequests: number;
  failedRequests: number;
  averageResponseTime: number;
  minResponseTime: number;
  maxResponseTime: number;
  requestsPerSecond: number;
}

export interface APIClient {
  name: string;
  baseUrl: string;
  healthCheck(): Promise<void>;
  testEndpoint(): Promise<any>;
}
