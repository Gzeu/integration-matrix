import axios from 'axios';
import type { APIClient } from '../types.js';

export class DictionaryAPI implements APIClient {
  name = 'DictionaryAPI';
  baseUrl = 'https://api.dictionaryapi.dev/api/v2';

  async healthCheck(): Promise<void> {
    await axios.get(`${this.baseUrl}/entries/en/hello`);
  }

  async testEndpoint(): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}/entries/en/example`);
    return data;
  }
}
