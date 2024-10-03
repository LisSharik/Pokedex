import PropTypes from "prop-types";

const typeColors = {
  fire: '#F08030',
  water: '#6890F0',
  grass: '#78C850',
  electric: '#F8D030',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040B0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  fairy: '#F0B6C0',
  normal: '#A8A878',
  steel: '#B8B8D0',
};

export default function ColorType({ types }) {
    return (
        <>
            {types.map((type, index) => {
                const color = typeColors[type.type.name]; 
                return (
                    <p key={index} style={{ backgroundColor: color }} className="text-sm text-neutral-100 font-bold py-[4px] px-4 rounded-full capitalize">
                        {type.type.name}
                    </p>
                );
            })}
        </>
    );
}

ColorType.propTypes = {
    types: PropTypes.array.isRequired,
};
