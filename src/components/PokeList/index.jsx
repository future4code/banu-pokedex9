import React, { useContext } from 'react';
import { PokemonsContex } from '../../context/PokemonContext';
import { CardPokemon } from '../CardPokemon';

import * as S from './styles';

export const Pokelist = () => {
  const { pokemons, handleNextPage, handlePreviousPage, loading } =
    useContext(PokemonsContex);

  return (
    <S.Container>
      {loading && <p>Carregando...</p>}
      <S.Content>
        {pokemons?.map((pokemon, index) => (
          <CardPokemon key={index} pokemon={pokemon} />
        ))}
      </S.Content>

      <S.ButtonGroup>
        <button onClick={handlePreviousPage}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </S.ButtonGroup>
    </S.Container>
  );
};
