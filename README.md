# Integration Matrix 🚀

[![CI/CD Pipeline](https://github.com/Gzeu/integration-matrix/actions/workflows/ci.yml/badge.svg)](https://github.com/Gzeu/integration-matrix/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A production-ready **API Integration Testing Framework** with 20 free APIs pre-configured with validation, benchmarks, retry logic, and circuit breaker patterns.

## ✨ Features

- 🔌 **20 Pre-configured APIs** - Ready to use, no API keys required
- 🔄 **Circuit Breaker Pattern** - Automatic failure detection and recovery
- ⚡ **Retry Logic** - Exponential backoff with jitter
- 📊 **Performance Benchmarks** - Track response times and throughput
- ✅ **Health Checks** - Monitor API availability
- 🐳 **Docker Support** - Containerized deployment
- 📈 **Observability** - Prometheus & Grafana integration
- 🔒 **Type-safe** - Full TypeScript coverage

## 📦 Included APIs

| API | Description | Use Case |
|-----|-------------|----------|
| **JSONPlaceholder** | Fake REST API | Testing, prototyping |
| **PokeAPI** | Pokemon data | Gaming, data analysis |
| **CatFacts** | Random cat facts | Fun content |
| **BoredAPI** | Activity suggestions | Entertainment |
| **DogAPI** | Dog images | Image testing |
| **AdviceSlip** | Random advice | Content generation |
| **JokeAPI** | Programming jokes | Fun content |
| **Quotable** | Famous quotes | Inspiration |
| **DictionaryAPI** | Word definitions | Language tools |
| **IPify** | IP address lookup | Network testing |
| **OpenMeteo** | Weather data | Weather apps |
| **RestCountries** | Country information | Geography data |
| **RandomUser** | Fake user data | Testing, mocking |
| **CoinGecko** | Crypto prices | Financial data |
| **GitHub** | Repository data | Developer tools |
| **OpenLibrary** | Book search | Education |
| **MealDB** | Recipe database | Food apps |
| **CocktailDB** | Cocktail recipes | Beverage apps |
| **NumbersAPI** | Number trivia | Fun facts |
| **Zippopotam** | Postal codes | Address validation |

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/Gzeu/integration-matrix.git
cd integration-matrix

# Install dependencies
npm install

# Build
npm run build
```

### Usage

```typescript
import { IntegrationMatrix } from './integration-matrix';

const matrix = new IntegrationMatrix({
  enableCircuitBreaker: true,
  enableRetry: true,
  enableBenchmark: true,
  maxRetries: 3,
  timeout: 10000
});

// Run health checks
const health = await matrix.healthCheck();
console.log(health);

// Run benchmarks
const benchmarks = await matrix.runBenchmarks();
console.log(benchmarks);
```

### Run Benchmarks

```bash
npm run benchmark
```

### Run Tests

```bash
# All tests
npm test

# Integration tests only
npm run test:integration
```

## 🐳 Docker Deployment

### Single Container

```bash
docker build -t integration-matrix .
docker run -p 3000:3000 integration-matrix
```

### Full Stack (with Prometheus & Grafana)

```bash
docker-compose up -d
```

Access points:
- **Application**: http://localhost:3000
- **Prometheus**: http://localhost:9090
- **Grafana**: http://localhost:3001 (admin/admin)

## 🏗️ Architecture

```
src/
├── index.ts                    # Main entry point
├── integration-matrix.ts       # Core framework
├── circuit-breaker.ts          # Circuit breaker implementation
├── retry-handler.ts            # Retry logic with backoff
├── api-validator.ts            # Response validation
├── performance-benchmark.ts    # Benchmarking utilities
├── types.ts                    # TypeScript types
├── utils/
│   └── logger.ts              # Logging utilities
└── apis/
    ├── registry.ts            # API registry
    ├── jsonplaceholder.ts     # API implementations
    ├── pokemon.ts
    └── ... (20 total APIs)
```

## 🔧 Configuration

```typescript
interface IntegrationConfig {
  enableCircuitBreaker: boolean;  // Enable circuit breaker pattern
  enableRetry: boolean;           // Enable retry logic
  enableBenchmark: boolean;       // Enable performance tracking
  maxRetries?: number;            // Maximum retry attempts (default: 3)
  timeout?: number;               // Request timeout in ms (default: 10000)
}
```

## 📊 Circuit Breaker

The circuit breaker protects your system from cascading failures:

- **CLOSED**: Normal operation
- **OPEN**: Failures detected, requests blocked
- **HALF_OPEN**: Testing recovery

Configuration:
```typescript
{
  failureThreshold: 5,      // Failures before opening
  resetTimeout: 60000       // Time before retry (ms)
}
```

## 🔄 Retry Logic

Exponential backoff with jitter prevents thundering herd:

```typescript
delay = baseDelay * 2^attempt + random(0, 1000)
```

Example delays:
- Attempt 1: ~1000ms
- Attempt 2: ~2000ms
- Attempt 3: ~4000ms

## 🧪 Testing

The framework includes comprehensive tests:

```bash
# Unit tests
npm test

# Integration tests
npm run test:integration

# Linting
npm run lint
```

## 📈 Observability

Prometheus metrics exported:
- Request count per API
- Response times (p50, p95, p99)
- Success/failure rates
- Circuit breaker states

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Add tests for new features
4. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file

## 🔗 Links

- [GitHub Repository](https://github.com/Gzeu/integration-matrix)
- [Issues](https://github.com/Gzeu/integration-matrix/issues)
- [Pull Requests](https://github.com/Gzeu/integration-matrix/pulls)

## 💡 Use Cases

- **API Testing**: Validate integrations before production
- **Load Testing**: Benchmark API performance
- **Learning**: Study circuit breaker and retry patterns
- **Prototyping**: Quick mock data for development
- **Monitoring**: Track API health and availability

## 🎯 Roadmap

- [ ] Add more APIs (target: 50+)
- [ ] GraphQL support
- [ ] Rate limiting
- [ ] Request caching
- [ ] Custom validation schemas
- [ ] Web dashboard
- [ ] Kubernetes manifests
- [ ] Helm charts

---

**Built with ❤️ by [Gzeu](https://github.com/Gzeu)**
