import axios from 'axios';
import type { APIClient } from '../types.js';

export class IPifyAPI implements APIClient {
  name = 'IPify';
  baseUrl = 'https://api.ipify.org';

  async healthCheck(): Promise<void> {
    await axios.get(`${this.baseUrl}?format=json`);
  }

  async testEndpoint(): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}?format=json`);
    return data;
  }
}
