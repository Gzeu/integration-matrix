import axios from 'axios';
import type { APIClient } from '../types.js';

export class RandomUserAPI implements APIClient {
  name = 'RandomUser';
  baseUrl = 'https://randomuser.me/api';

  async healthCheck(): Promise<void> {
    await axios.get(this.baseUrl);
  }

  async testEndpoint(): Promise<any> {
    const { data } = await axios.get(this.baseUrl);
    return data;
  }
}
