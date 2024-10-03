import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../redux/pokemonSlice';
import PokemonCard from './PokemonCard';

export default function PokemonList() {
  const dispatch = useDispatch();
  const { pokemons, loading, error } = useSelector((state) => state.pokemon);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='w-[90vw] flex flex-col items-center my-10'>
      <input
        type='text'
        placeholder='Search Pokémon...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='w-[50%] p-2 mb-4 border border-gray-300 rounded bg-neutral-100 text-brown-normal dark:bg-transparent dark:text-neutral-300'
      />

      <section className='w-full flex flex-wrap justify-center items-start gap-6 font-bold py-4'>
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <p>No Pokémon found.</p>
        )}
      </section>
    </div>
  );
}
