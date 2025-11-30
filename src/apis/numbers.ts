import axios from 'axios';
import type { APIClient } from '../types.js';

export class NumbersAPI implements APIClient {
  name = 'NumbersAPI';
  baseUrl = 'http://numbersapi.com';

  async healthCheck(): Promise<void> {
    await axios.get(`${this.baseUrl}/42`);
  }

  async testEndpoint(): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}/random/trivia`);
    return data;
  }
}
