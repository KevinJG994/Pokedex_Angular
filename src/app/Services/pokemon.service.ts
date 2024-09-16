import { Injectable } from '@angular/core';
import { Resultado } from '../interfaces/pokeapi';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  async getByPage(limit: number = 151, offset: number = 0): Promise<Resultado[]> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
    const resJson = await res.json();

    if (resJson.results.length > 0) {
      return resJson.results;
    } else {
      return [];
    }
  }

  async getById(id: string) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const resJson = await res.json();


  }

  async getDescription(id: string) {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
      const resJson = await res.json();
      const description = resJson.flavor_text_entries.find((entry: any) => entry.language.name === 'en');
      return description ? description.flavor_text : 'No description available';
    } catch (error) {
      console.error('Error fetching Pokémon description:', error);
      return 'Description not found';
    }
  }

  async getTipos(id: string) {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const resJson = await res.json();
      return resJson.types.map((type: any) => type.type.name);
    } catch (error) {
      console.error('Error fetching Pokémon types:', error);
      return [];
    }
  }
}
