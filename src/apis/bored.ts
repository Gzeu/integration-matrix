import axios from 'axios';
import type { APIClient } from '../types.js';

export class BoredAPI implements APIClient {
  name = 'BoredAPI';
  baseUrl = 'https://www.boredapi.com/api';

  async healthCheck(): Promise<void> {
    await axios.get(`${this.baseUrl}/activity`);
  }

  async testEndpoint(): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}/activity`);
    return data;
  }
}
