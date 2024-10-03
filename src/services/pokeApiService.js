export const getPokemons = async () => {
  const response = await fetch(`${import.meta.env.VITE_URL_POKEAPI}?limit=16`);
  const data = await response.json();

  const promises = data.results.map(async (pokemon) => {
    const response = await fetch(pokemon.url);
    const pokemonData = await response.json();
    return pokemonData;
  });

  const results = await Promise.all(promises);

  return results; 
};


