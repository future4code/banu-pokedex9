import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PokemonsContex } from '../../context/PokemonContext';

import * as S from './styles';

export const Pokelist = () => {
  const { pokemons, handleNextPage, handlePreviousPage, loading } =
    useContext(PokemonsContex);

  return (
    <S.Container>
      {loading && <p>Carregando...</p>}
      <S.Content>
        {pokemons?.map((pokemon, index) => (
          <S.Card key={pokemon.id}>
            <S.Box>
              <img
                src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
              />
              <Link to={`/pokemon-details/${pokemon.id}`}>{pokemon.name}</Link>
              <p>{pokemon.id < 100 ? `#0${pokemon.id}` : `#${pokemon.id}`}</p>
            </S.Box>

            <S.IconGroup>
              {pokemon.types.map((t, index) => (
                <S.TypeIcon key={index} type={t.type.name} />
              ))}
            </S.IconGroup>
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
