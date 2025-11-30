import axios from 'axios';
import type { APIClient } from '../types.js';

export class CoinGeckoAPI implements APIClient {
  name = 'CoinGecko';
  baseUrl = 'https://api.coingecko.com/api/v3';

  async healthCheck(): Promise<void> {
    await axios.get(`${this.baseUrl}/ping`);
  }

  async testEndpoint(): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}/simple/price?ids=bitcoin&vs_currencies=usd`);
    return data;
  }
}
