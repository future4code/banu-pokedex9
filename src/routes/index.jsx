import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Pokedex } from '../pages/Pokedex';
import { PokemonDetails } from '../pages/PokemonDetails';

export const Router = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/pokemon-details/:id' element={<PokemonDetails />} />
      <Route path='/pokedex' element={<Pokedex />} />
    </Routes>
  );
};
