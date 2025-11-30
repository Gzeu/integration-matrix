import axios from 'axios';
import type { APIClient } from '../types.js';

export class ZippopotamAPI implements APIClient {
  name = 'Zippopotam';
  baseUrl = 'https://api.zippopotam.us';

  async healthCheck(): Promise<void> {
    await axios.get(`${this.baseUrl}/us/90210`);
  }

  async testEndpoint(): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}/ro/010011`);
    return data;
  }
}
