import type { APIClient } from '../types.js';
import { JSONPlaceholderAPI } from './jsonplaceholder.js';
import { PokemonAPI } from './pokemon.js';
import { CatFactsAPI } from './catfacts.js';
import { BoredAPI } from './bored.js';
import { DogAPI } from './dog.js';
import { AdviceSlipAPI } from './adviceslip.js';
import { JokeAPI } from './joke.js';
import { QuotableAPI } from './quotable.js';
import { DictionaryAPI } from './dictionary.js';
import { IPifyAPI } from './ipify.js';
import { OpenMeteoAPI } from './openmeteo.js';
import { RestCountriesAPI } from './restcountries.js';
import { RandomUserAPI } from './randomuser.js';
import { CoinGeckoAPI } from './coingecko.js';
import { GitHubAPI } from './github.js';
import { OpenLibraryAPI } from './openlibrary.js';
import { MealDBAPI } from './mealdb.js';
import { CocktailDBAPI } from './cocktaildb.js';
import { NumbersAPI } from './numbers.js';
import { ZippopotamAPI } from './zippopotam.js';

export class APIRegistry {
  private apis: Map<string, APIClient>;

  constructor() {
    this.apis = new Map();
    this.registerAPIs();
  }

  private registerAPIs(): void {
    const apiInstances = [
      new JSONPlaceholderAPI(),
      new PokemonAPI(),
      new CatFactsAPI(),
      new BoredAPI(),
      new DogAPI(),
      new AdviceSlipAPI(),
      new JokeAPI(),
      new QuotableAPI(),
      new DictionaryAPI(),
      new IPifyAPI(),
      new OpenMeteoAPI(),
      new RestCountriesAPI(),
      new RandomUserAPI(),
      new CoinGeckoAPI(),
      new GitHubAPI(),
      new OpenLibraryAPI(),
      new MealDBAPI(),
      new CocktailDBAPI(),
      new NumbersAPI(),
      new ZippopotamAPI()
    ];

    apiInstances.forEach(api => {
      this.apis.set(api.name, api);
    });
  }

  getAllAPIs(): Record<string, APIClient> {
    return Object.fromEntries(this.apis);
  }

  getAPI(name: string): APIClient | undefined {
    return this.apis.get(name);
  }
}
