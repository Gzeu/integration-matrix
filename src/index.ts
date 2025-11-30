import { IntegrationMatrix } from './integration-matrix.js';
import { logger } from './utils/logger.js';

const matrix = new IntegrationMatrix({
  enableCircuitBreaker: true,
  enableRetry: true,
  enableBenchmark: true,
  maxRetries: 3,
  timeout: 10000
});

async function main() {
  logger.info('Starting Integration Matrix Framework');
  
  try {
    // Run health checks on all APIs
    const healthStatus = await matrix.healthCheck();
    logger.info('Health check results:', healthStatus);
    
    // Run benchmarks
    const benchmarks = await matrix.runBenchmarks();
    logger.info('Benchmark results:', benchmarks);
    
  } catch (error) {
    logger.error('Error running Integration Matrix:', error);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { IntegrationMatrix };
