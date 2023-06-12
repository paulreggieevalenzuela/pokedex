import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import * as PokemonApi from '@/services/pokemon-api';

import Layout from '@/components/layout/Layout';
import PokemonData from '@/components/PokemonData';
import Button from '@/components/Button';
import Skeleton from '@/components/Skeleton';

export default function HomePage(): any {
  const [pageSize, setPageSize] = useState(10);
  const router = useRouter();

  const page = parseInt(router.query.page?.toString() || '1');

  const { data, isLoading, mutate } = useSWR(['getPokemonPage', page], () =>
    PokemonApi.getPokemonPage(page, pageSize)
  );

  useEffect(() => {
    mutate();
  }, [pageSize, mutate]);

  const getId = (index: number) => {
    let count = 0;
    if (page === 1) {
      count = index + 1;
    } else {
      count = pageSize * (page - 1) + index + 1;
    }

    return count;
  };

  return (
    <Layout>
      <h1 className='mb-8 text-center text-4xl'>Pokedex</h1>
      <Skeleton />
      <div className='my-4 flex justify-center gap-2'>
        {data?.previous && (
          <Button
            disabled={isLoading}
            onClick={() =>
              router.push({ query: { ...router.query, page: page - 1 } })
            }
          >
            Previous page
          </Button>
        )}
        <select
          onChange={(e) => {
            const target = e.target;
            const value = target.value;

            setPageSize(value);
          }}
          defaultValue={pageSize}
        >
          {[10, 20, 30, 40].map((op) => (
            <option key={op} value={op}>
              {op}
            </option>
          ))}
        </select>
        {data?.next && (
          <Button
            disabled={isLoading}
            onClick={() =>
              router.push({ query: { ...router.query, page: page + 1 } })
            }
          >
            Next page
          </Button>
        )}
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {data?.results.map((poke, index) => {
          const id = getId(index);
          const paddedId = ('00' + id).slice(-3);
          const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
          return (
            <PokemonData key={index} name={poke.name} id={id} image={image} />
          );
        })}
      </div>
    </Layout>
  );
}
