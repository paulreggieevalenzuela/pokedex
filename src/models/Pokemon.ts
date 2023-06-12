export interface PokemonPage {
  results: { name: string; image?: string; url?: string }[];
  next: string | null;
  previous: string | null;
  count?: number;
}

export interface Pokemon {
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  stats: any[];
}
