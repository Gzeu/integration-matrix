import axios from 'axios';
import type { APIClient } from '../types.js';

export class GitHubAPI implements APIClient {
  name = 'GitHub';
  baseUrl = 'https://api.github.com';

  async healthCheck(): Promise<void> {
    await axios.get(`${this.baseUrl}/zen`);
  }

  async testEndpoint(): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}/users/github`);
    return data;
  }
}
