import axios from 'axios';
import type { APIClient } from '../types.js';

export class MealDBAPI implements APIClient {
  name = 'MealDB';
  baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  async healthCheck(): Promise<void> {
    await axios.get(`${this.baseUrl}/random.php`);
  }

  async testEndpoint(): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}/random.php`);
    return data;
  }
}
