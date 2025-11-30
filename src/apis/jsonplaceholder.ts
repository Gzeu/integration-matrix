import axios from 'axios';
import type { APIClient } from '../types.js';

export class JSONPlaceholderAPI implements APIClient {
  name = 'JSONPlaceholder';
  baseUrl = 'https://jsonplaceholder.typicode.com';

  async healthCheck(): Promise<void> {
    await axios.get(`${this.baseUrl}/posts/1`);
  }

  async testEndpoint(): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}/posts/1`);
    return data;
  }
}
