import axios from 'axios';
import type { APIClient } from '../types.js';

export class RestCountriesAPI implements APIClient {
  name = 'RestCountries';
  baseUrl = 'https://restcountries.com/v3.1';

  async healthCheck(): Promise<void> {
    await axios.get(`${this.baseUrl}/name/romania`);
  }

  async testEndpoint(): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}/name/romania`);
    return data;
  }
}
