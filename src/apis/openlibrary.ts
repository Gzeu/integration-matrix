import axios from 'axios';
import type { APIClient } from '../types.js';

export class OpenLibraryAPI implements APIClient {
  name = 'OpenLibrary';
  baseUrl = 'https://openlibrary.org';

  async healthCheck(): Promise<void> {
    await axios.get(`${this.baseUrl}/search.json?q=javascript&limit=1`);
  }

  async testEndpoint(): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}/search.json?q=programming&limit=5`);
    return data;
  }
}
