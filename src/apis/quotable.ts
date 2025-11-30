import axios from 'axios';
import type { APIClient } from '../types.js';

export class QuotableAPI implements APIClient {
  name = 'Quotable';
  baseUrl = 'https://api.quotable.io';

  async healthCheck(): Promise<void> {
    await axios.get(`${this.baseUrl}/random`);
  }

  async testEndpoint(): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}/random`);
    return data;
  }
}
