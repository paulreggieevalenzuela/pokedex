import { Fragment } from 'react';
import usePokemon from '@/hooks/usePokemon';
import Link from 'next/link';
import Image from 'next/image';
import Elevations from '@/components/Elevations';
import Skeleton from '@/components/Skeleton';

export default function PokemonEntry({
  name,
  id,
  image,
}: {
  name: string;
  image: string;
  id?: number | string;
}) {
  const { pokemon, pokemonLoading } = usePokemon(name);
  const url = `/pokemon?id=${id}`;

  return (
    <Link href={url}>
      {pokemonLoading ? (
        <Skeleton style={{ height: 150 }} />
      ) : (
        <Elevations>
          {pokemon && (
            <Fragment>
              <p className='text-center text-base font-bold'>{pokemon.name}</p>
              <Image
                src={image}
                alt={'Pokemon: ' + pokemon.name}
                width={200}
                height={200}
              />
            </Fragment>
          )}
        </Elevations>
      )}
    </Link>
  );
}
