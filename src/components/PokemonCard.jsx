import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setSelectedPokemon } from "../redux/pokemonSlice";
import { useNavigate } from "react-router-dom";
import ColorType from "./ColorType";
import { Icon } from "@iconify/react/dist/iconify.js";


export default function PokemonCard({ pokemon }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setSelectedPokemon(pokemon));
    navigate(`/pokemon/${pokemon.id}`);
  };

  return (
    <div onClick={handleClick} className="w-[15vw] h-[40vh] border-2 border-brown-normal rounded-md gap-2 py-4 flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-all capitalize relative dark:border-neutral-400">
      <p className="absolute top-2 right-4 text-sm">#{pokemon.id}</p>
      <img className="w-[150px] z-10" src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p className="text-lg">{pokemon.name}</p>
      <div className="w-full flex justify-center items-center gap-4 ">
          <ColorType types={pokemon.types} />
      </div>
      <Icon icon="ic:twotone-catching-pokemon" className="absolute text-[12rem] rotate-[40deg] top-[-3rem] left-[-4rem] opacity-40" />

    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
