import axios from 'axios';
import type { APIClient } from '../types.js';

export class CatFactsAPI implements APIClient {
  name = 'CatFacts';
  baseUrl = 'https://catfact.ninja';

  async healthCheck(): Promise<void> {
    await axios.get(`${this.baseUrl}/fact`);
  }

  async testEndpoint(): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}/fact`);
    return data;
  }
}
