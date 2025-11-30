import axios from 'axios';
import type { APIClient } from '../types.js';

export class OpenMeteoAPI implements APIClient {
  name = 'OpenMeteo';
  baseUrl = 'https://api.open-meteo.com/v1';

  async healthCheck(): Promise<void> {
    await axios.get(`${this.baseUrl}/forecast?latitude=52.52&longitude=13.41&current_weather=true`);
  }

  async testEndpoint(): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}/forecast?latitude=44.43&longitude=26.10&current_weather=true`);
    return data;
  }
}
