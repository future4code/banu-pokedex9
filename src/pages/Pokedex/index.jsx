import { useState } from 'react';
import { CardPokemon } from '../../components/CardPokemon';
import { Header } from '../../components/Header';

import * as S from './styles';

export const Pokedex = () => {
  const pokedexList = JSON.parse(localStorage.getItem('@Pokedex'));
  const [pokedex, setPokedex] = useState(pokedexList);

  const handleRemovePokemon = (id) => {
    const pokedex = JSON.parse(localStorage.getItem('@Pokedex'));

    const pokemonExists = pokedex.find((p) => p.id === id);

    if (pokemonExists) {
      const newPokedex = pokedex.filter((p) => p.id !== pokemonExists.id);
      setPokedex(newPokedex);
      JSON.stringify(
        localStorage.setItem('@Pokedex', JSON.stringify(newPokedex))
      );
    }
  };

  return (
    <>
      <Header />
      <S.Container>
        {pokedex?.map((pokemon, index) => (
          <CardPokemon
            key={index}
            pokemon={pokemon}
            active='active'
            handleRemovePokemon={handleRemovePokemon}
          />
        ))}
      </S.Container>
    </>
  );
};
