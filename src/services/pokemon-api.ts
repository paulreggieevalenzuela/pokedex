import { Pokemon, PokemonPage } from '@/models/Pokemon';
import api from './api';

export async function getPokemon(name: string) {
  await new Promise((r) => setTimeout(r, 3000));
  const response = await api.get<Pokemon>('/pokemon/' + name);
  return response.data;
}

export async function getPokemonPage(page: number, pageSize: number) {
  const response = await api.get<PokemonPage>(
    `/pokemon?limit=${pageSize}&offset=${pageSize * (page - 1)}`
  );
  return response.data;
}
