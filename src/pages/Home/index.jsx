import React from 'react';
import { Header } from '../../components/Header';
import { Pokelist } from '../../components/PokeList';

export const Home = () => {
  return (
    <div>
      <Header />
      <Pokelist />
    </div>
  );
};
