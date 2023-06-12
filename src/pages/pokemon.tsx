import React, { Fragment } from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import Button from '@/components/Button';

import { Pokemon } from '@/models/Pokemon';
import * as PokemonApi from '@/services/pokemon-api';

export default function pokemon({ data }) {
  return (
    <Layout>
      <Button className='mb-5 text-center'>
        <Link href='/' className='text-2xl'>
          Home
        </Link>
      </Button>
      <h1 className='mb-2 text-4xl capitalize'>
        {data.name} &#35;{data.id}
      </h1>
      <img src={data.image} alt={data.name} />
      <div className='space-between mt-5 flex w-full'>
        <p className='flex-1 font-bold'>Attributes</p>
        <p className='flex-1 font-bold'>Value</p>
      </div>
      {data.stats.map((stat, index): any => (
        <div key={index} className='space-between my-5 flex w-full'>
          <p className='flex-1'>{stat.stat.name}</p>
          <p className='flex-1'>{stat.base_stat}</p>
        </div>
      ))}
      <div className='flex'>
        {data.types.map((type, index): any => (
          <span key={index} className='mr-2 rounded-full bg-white px-8 py-2'>
            {type.type.name}
          </span>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }): any {
  const id = query.id;
  try {
    const res = await PokemonApi.getPokemon(id);
    console.log('res', res);
    const paddedId = ('00' + id).slice(-3);

    return {
      props: {
        data: {
          name: res.name,
          stats: res.stats,
          types: res.types,
          id: paddedId,
          image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`,
        },
      },
    };
  } catch (err) {
    console.error(err);
  }
}
