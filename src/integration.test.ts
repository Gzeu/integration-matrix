import { apiRequest, validateResponse, CircuitBreaker } from './api-validator';
import Joi from 'joi';

describe('API Integration Suite', () => {
  const apis = [
    { name: 'JSONPlaceholder', url: 'https://jsonplaceholder.typicode.com/posts/1', schema: Joi.object({ userId: Joi.number(), id: Joi.number(), title: Joi.string(), body: Joi.string() }) },
    { name: 'CoinGecko', url: 'https://api.coingecko.com/api/v3/ping', schema: Joi.object({ gecko_says: Joi.string() }) },
    { name: 'GitHub', url: 'https://api.github.com/zen', schema: Joi.string() },
    { name: 'RestCountries', url: 'https://restcountries.com/v3.1/alpha/RO', schema: Joi.array().items(Joi.object({ cca2: Joi.string(), name: Joi.object() })) },
    { name: 'OpenWeather', url: 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=demo', schema: Joi.object({ weather: Joi.array(), main: Joi.object() }) },
    { name: 'JokeAPI', url: 'https://v2.jokeapi.dev/joke/Programming', schema: Joi.object({ error: Joi.boolean(), type: Joi.string() }) },
    { name: 'CatFacts', url: 'https://catfact.ninja/fact', schema: Joi.object({ fact: Joi.string(), length: Joi.number() }) },
    { name: 'PokeAPI', url: 'https://pokeapi.co/api/v2/pokemon/ditto', schema: Joi.object({ name: Joi.string(), id: Joi.number() }) },
    { name: 'SWAPI', url: 'https://swapi.dev/api/people/1', schema: Joi.object({ name: Joi.string(), height: Joi.string() }) },
    { name: 'Advice', url: 'https://api.adviceslip.com/advice', schema: Joi.object({ slip: Joi.object({ id: Joi.number(), advice: Joi.string() }) }) },
    { name: 'DadJokes', url: 'https://icanhazdadjoke.com/', schema: Joi.object({ joke: Joi.string() }), headers: { Accept: 'application/json' } },
    { name: 'UUID Generator', url: 'https://www.uuidtools.com/api/generate/v4', schema: Joi.array().items(Joi.string().guid()) },
    { name: 'Quotable', url: 'https://api.quotable.io/random', schema: Joi.object({ content: Joi.string(), author: Joi.string() }) },
    { name: 'Bored API', url: 'https://www.boredapi.com/api/activity', schema: Joi.object({ activity: Joi.string() }) },
    { name: 'Agify', url: 'https://api.agify.io?name=michael', schema: Joi.object({ name: Joi.string(), age: Joi.number().allow(null), count: Joi.number() }) },
    { name: 'Genderize', url: 'https://api.genderize.io?name=peter', schema: Joi.object({ name: Joi.string(), gender: Joi.string().allow(null), probability: Joi.number(), count: Joi.number() }) },
    { name: 'Nationalize', url: 'https://api.nationalize.io?name=michael', schema: Joi.object({ name: Joi.string(), country: Joi.array() }) },
    { name: 'ExchangeRate', url: 'https://api.exchangerate-api.com/v4/latest/USD', schema: Joi.object({ base: Joi.string(), rates: Joi.object() }) },
    { name: 'ipify', url: 'https://api.ipify.org?format=json', schema: Joi.object({ ip: Joi.string().ip({ version: ['ipv4', 'ipv6'] }) }) },
    { name: 'RandomUser', url: 'https://randomuser.me/api/', schema: Joi.object({ results: Joi.array().min(1), info: Joi.object() }) },
  ];

  for (const def of apis) {
    test(`${def.name} responds and matches schema`, async () => {
      const data = await apiRequest({ url: def.url, headers: def.headers });
      validateResponse(def.schema, data);
    }, 20000);
  }
});
