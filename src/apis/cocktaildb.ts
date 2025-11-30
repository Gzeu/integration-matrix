import axios from 'axios';
import type { APIClient } from '../types.js';

export class CocktailDBAPI implements APIClient {
  name = 'CocktailDB';
  baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

  async healthCheck(): Promise<void> {
    await axios.get(`${this.baseUrl}/random.php`);
  }

  async testEndpoint(): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}/random.php`);
    return data;
  }
}
