import { apiRequest } from './api-validator';

const APIs = [
  { name: 'JSONPlaceholder', url: 'https://jsonplaceholder.typicode.com/posts/1' },
  { name: 'CoinGecko', url: 'https://api.coingecko.com/api/v3/ping' },
  { name: 'GitHub', url: 'https://api.github.com/zen' },
  { name: 'RestCountries', url: 'https://restcountries.com/v3.1/alpha/RO' },
  { name: 'OpenWeather', url: 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=demo' },
  { name: 'JokeAPI', url: 'https://v2.jokeapi.dev/joke/Programming' },
  { name: 'CatFacts', url: 'https://catfact.ninja/fact' },
  { name: 'PokeAPI', url: 'https://pokeapi.co/api/v2/pokemon/ditto' },
  { name: 'SWAPI', url: 'https://swapi.dev/api/people/1' },
  { name: 'Advice', url: 'https://api.adviceslip.com/advice' },
  { name: 'DadJokes', url: 'https://icanhazdadjoke.com/', headers: { Accept: 'application/json' } },
  { name: 'UUID Generator', url: 'https://www.uuidtools.com/api/generate/v4' },
  { name: 'Quotable', url: 'https://api.quotable.io/random' },
  { name: 'Bored API', url: 'https://www.boredapi.com/api/activity' },
  { name: 'Agify', url: 'https://api.agify.io?name=michael' },
  { name: 'Genderize', url: 'https://api.genderize.io?name=peter' },
  { name: 'Nationalize', url: 'https://api.nationalize.io?name=michael' },
  { name: 'ExchangeRate', url: 'https://api.exchangerate-api.com/v4/latest/USD' },
  { name: 'ipify', url: 'https://api.ipify.org?format=json' },
  { name: 'RandomUser', url: 'https://randomuser.me/api/' },
];

export async function runBenchmarks() {
  for (const api of APIs) {
    const start = Date.now();
    try {
      await apiRequest({ url: api.url, headers: api.headers });
      const elapsed = Date.now() - start;
      console.log(`${api.name}: ${elapsed}ms`);
    } catch (error) {
      console.error(`${api.name} error:`, error.message);
    }
  }
}

if (require.main === module) {
  runBenchmarks();
}
