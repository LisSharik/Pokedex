import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemons } from '../services/pokeApiService';

export const fetchPokemons = createAsyncThunk('pokemon/fetchPokemons', async () => {
  const response = await getPokemons();
  return response;
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemons: [],
    selectedPokemon: null,
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedPokemon: (state, action) => {
      state.selectedPokemon = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.loading = false;
      state.pokemons = action.payload;
    });
    builder.addCase(fetchPokemons.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { setSelectedPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
