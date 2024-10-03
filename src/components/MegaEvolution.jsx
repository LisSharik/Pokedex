import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function MegaEvolution() {
  const { selectedPokemon } = useSelector((state) => state.pokemon);
  const [hasMegaEvolution, setHasMegaEvolution] = useState(false);
  const [megaEvolutionCards, setMegaEvolutionCards] = useState([]);

  useEffect(() => {
    async function getEvolutionDetails() {
      try {
     
        const pokemonSpecieResponse = await axios.get(selectedPokemon.species.url);
        const pokemonSpecie = pokemonSpecieResponse.data;

   
        const evolutionChainResponse = await axios.get(pokemonSpecie.evolution_chain.url);
        const evolutionChain = evolutionChainResponse.data.chain;

        
        const megaForms = pokemonSpecie.varieties.filter(variety => variety.pokemon.name.includes("mega"));
        if (megaForms.length > 0) {
          setHasMegaEvolution(true);
        } else {
          setHasMegaEvolution(false);
        }

        
        const lastEvolution = getLastEvolution(evolutionChain);
        if (lastEvolution) {
          getMegaEvolutionCards(lastEvolution.species.name);
        }

      } catch (error) {
        console.error("Error fetching evolution details:", error);
      }
    }

    if (selectedPokemon) {
      getEvolutionDetails();
    }
  }, [selectedPokemon]);

  
  async function getMegaEvolutionCards(pokemonName) {
    try {
      const response = await axios.get(`${import.meta.env.VITE_URL_POKEMONTCG}cards?q=evolvesFrom:${pokemonName}`);
      setMegaEvolutionCards(response.data.data || []);
    } catch (error) {
      console.error("Error fetching Mega Evolution cards:", error);
    }
  }

  
  function getLastEvolution(chain) {
    let currentChain = chain;
    while (currentChain.evolves_to.length > 0) {
      currentChain = currentChain.evolves_to[0];
    }
    return currentChain;
  }

  return (
    <div className="w-screen mb-10 flex flex-col justify-start items-center gap-10">
      <h2 className="text-3xl font-bold overflow-hidden">Mega evolutions</h2>
      
      {hasMegaEvolution ? (
        <div className="flex justify-center items-center flex-wrap gap-10">
          {megaEvolutionCards.length > 0 ? (
            megaEvolutionCards.map((card) => (
              <div key={card.id} className="flex flex-col justify-center items-center gap-3">
                <img src={card.images.small} alt={card.name} />
                <p className="text-lg font-bold">{card.name}</p>
              </div>
            ))
          ) : (
            <p>No Mega Evolution cards found.</p>
          )}
        </div>
      ) : (
        <p>No Mega Evolutions available.</p>
      )}
    </div>
  );
}
