import axios from 'axios';
import type { APIClient } from '../types.js';

export class DogAPI implements APIClient {
  name = 'DogAPI';
  baseUrl = 'https://dog.ceo/api';

  async healthCheck(): Promise<void> {
    await axios.get(`${this.baseUrl}/breeds/list/all`);
  }

  async testEndpoint(): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}/breeds/image/random`);
    return data;
  }
}
