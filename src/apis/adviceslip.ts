import axios from 'axios';
import type { APIClient } from '../types.js';

export class AdviceSlipAPI implements APIClient {
  name = 'AdviceSlip';
  baseUrl = 'https://api.adviceslip.com';

  async healthCheck(): Promise<void> {
    await axios.get(`${this.baseUrl}/advice`);
  }

  async testEndpoint(): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}/advice`);
    return data;
  }
}
