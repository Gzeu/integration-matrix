import { IntegrationMatrix } from './integration-matrix.js';
import { logger } from './utils/logger.js';

const matrix = new IntegrationMatrix({
  enableCircuitBreaker: true,
  enableRetry: true,
  enableBenchmark: true,
  maxRetries: 3,
  timeout: 10000
});

async function runBenchmarks() {
  logger.info('🚀 Starting API benchmarks...');
  
  try {
    const results = await matrix.runBenchmarks();
    
    logger.info('\n📊 Benchmark Results:\n');
    Object.entries(results).forEach(([apiName, result]) => {
      logger.info(`${apiName}:`);
      logger.info(`  ✓ Success Rate: ${(result.successfulRequests / result.totalRequests * 100).toFixed(2)}%`);
      logger.info(`  ⏱️  Avg Response Time: ${result.averageResponseTime.toFixed(2)}ms`);
      logger.info(`  📈 Requests/sec: ${result.requestsPerSecond.toFixed(2)}`);
      logger.info('');
    });
  } catch (error) {
    logger.error('Benchmark failed:', error);
  }
}

runBenchmarks();
