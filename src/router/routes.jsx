import { Routes, Route } from 'react-router-dom';
import PokemonList from '../components/PokemonList';
import PokemonDetails from '../components/PokemonDetails';

export default function PokeRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<PokemonList />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
    </Routes>
  );
}
