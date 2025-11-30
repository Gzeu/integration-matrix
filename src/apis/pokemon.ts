import axios from 'axios';
import type { APIClient } from '../types.js';

export class PokemonAPI implements APIClient {
  name = 'PokeAPI';
  baseUrl = 'https://pokeapi.co/api/v2';

  async healthCheck(): Promise<void> {
    await axios.get(`${this.baseUrl}/pokemon/1`);
  }

  async testEndpoint(): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}/pokemon/pikachu`);
    return data;
  }
}
