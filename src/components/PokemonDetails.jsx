import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import ColorType from "./ColorType";
import Stats from "./Stats";
import MegaEvolution from "./MegaEvolution";

export default function PokemonDetails() {
  const { selectedPokemon } = useSelector((state) => state.pokemon);
  const { id } = useParams();

  if (!selectedPokemon || selectedPokemon.id !== parseInt(id)) {
    return <p>Select a Pokémon to view details</p>;
  }

  return (
    <section className="w-screen mt-10 flex flex-col justify-center items-center gap-24 capitalize">
      <div className="w-[80%] h-auto py-10 flex justify-center items-center gap-24 border-2 border-brown-dark rounded-md overflow-hidden relative dark:border-neutral-400">
        <div className="w-[20%] z-10">
          <img
            className="w-[16vw]"
            src={selectedPokemon.sprites.other.showdown.front_default}
            alt={selectedPokemon.name}
          />
        </div>
        <div className="w-[40%] h-full flex  flex-col gap-5 z-10">
          <h2 className="text-5xl font-bold  overflow-hidden">
            {selectedPokemon.name}
          </h2>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-xl">Types:</h3>
            <div className="w-full flex justify-start items-center gap-4">
              <ColorType types={selectedPokemon.types} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-xl">Stats:</h3>
            <Stats stats={selectedPokemon.stats} />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-xl">Ability:</h3>
            <p>{selectedPokemon.abilities[0].ability.name}</p>
          </div>
        </div>

        <Icon
          className="absolute bottom-[-10rem] left-[-12rem] rotate-45 text-[40rem]  opacity-20 "
          icon="ic:twotone-catching-pokemon"
        />
      </div>

      <MegaEvolution />
    </section>
  );
}
