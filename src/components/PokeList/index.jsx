import React, { useContext } from 'react';
import { PokemonsContex } from '../../context/PokemonContext';

import * as S from './styles';

export const Pokelist = () => {
  const { pokemons, handleNextPage, handlePreviousPage, loading } =
    useContext(PokemonsContex);

  // const typesPokemon = pokemons?.map((item) => item.types[0].type);

  return (
    <S.Container>
      {loading && <p>Carregando...</p>}
      <S.Content>
        {pokemons?.map((pokemon, index) => (
          <S.Card key={pokemon.id}>
            <p>{pokemon.name}</p>
          </S.Card>
        ))}
      </S.Content>

      <S.ButtonGroup>
        <button onClick={handlePreviousPage}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </S.ButtonGroup>
    </S.Container>
  );
};
