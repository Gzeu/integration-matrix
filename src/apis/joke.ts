import axios from 'axios';
import type { APIClient } from '../types.js';

export class JokeAPI implements APIClient {
  name = 'JokeAPI';
  baseUrl = 'https://v2.jokeapi.dev';

  async healthCheck(): Promise<void> {
    await axios.get(`${this.baseUrl}/joke/Programming?type=single`);
  }

  async testEndpoint(): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}/joke/Any?type=single`);
    return data;
  }
}
