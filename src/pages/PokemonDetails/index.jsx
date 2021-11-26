import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { PokemonsContex } from '../../context/PokemonContext';
import {
  ButtonGroup,
  Container,
  FrontCover,
  TabContent,
  Tabs,
  Content,
  WrapperImg,
  InfoPokemon,
  Pills,
  TabContentStats,
  TabsContainer,
  StatsBar,
  StatsName,
  BoxEvolution,
  MovesList,
} from './styles';

import arrowRightIcon from '../../img/arrow_right.svg';
import { Link } from 'react-router-dom';

const types = ['Stats', 'Evolves From', 'Moves'];

export const PokemonDetails = () => {
  const params = useParams();
  const { pokemons } = useContext(PokemonsContex);
  const [pokemonSpecie, setPokemonSpecie] = useState({});
  const [active, setActive] = useState(types[0]);

  useEffect(() => {
    async function getPokemonEvolution() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${params.id}`
      );

      setPokemonSpecie(response.data);
    }
    getPokemonEvolution();
  }, [params.id]);

  const previousSpecies = pokemons.find(
    (pokemon) => pokemonSpecie?.evolves_from_species?.name === pokemon.name
  );

  const pokemonDetails = pokemons.find(
    (pokemon) => Number(params.id) === pokemon.id
  );
  const pokemonType = pokemonDetails?.types[0]?.type?.name;

  const handleAddPokemonInPokedex = (pokemon) => {
    let pokedex = JSON.parse(localStorage.getItem('@Pokedex'));

    if (!pokedex) {
      pokedex = [];
      localStorage.setItem('@Pokedex', JSON.stringify([...pokedex, pokemon]));

      alert('Pokemon captured! :)');
    } else {
      const pokemonExists = pokedex.find((p) => p.id === pokemon.id);
      if (pokemonExists) {
        alert('This pokemon has already been captured! :(');
        return;
      }
      localStorage.setItem('@Pokedex', JSON.stringify([...pokedex, pokemon]));
      alert('Pokemon captured! :)');
    }
  };

  if (pokemonDetails)
    return (
      <Container>
        <FrontCover type={pokemonType}>
          <div>
            <Link to='/'>&#129040; Voltar</Link>
            <button
              type='button'
              onClick={() => handleAddPokemonInPokedex(pokemonDetails)}
            >
              <img
                src='	https://www.pngkey.com/png/full/144-1446994_pokeball-clipart-transparent-background-pokeball-png.png'
                alt='Pokebola'
              />
              Adiconar a pokedex
            </button>
          </div>
        </FrontCover>
        <Content>
          <WrapperImg>
            <img
              src={`https://cdn.traction.one/pokedex/pokemon/${pokemonDetails.id}.png`}
              alt={pokemonDetails.name}
            />
          </WrapperImg>
          <InfoPokemon>
            <h1>{pokemonDetails.name}</h1>
            <div>
              {pokemonDetails.types.map((item, index) => (
                <Pills key={index} type={item.type.name}>
                  {item.type.name}
                </Pills>
              ))}
            </div>
          </InfoPokemon>
          <TabsContainer>
            <ButtonGroup>
              {types.map((type, index) => (
                <Tabs
                  key={index}
                  pokemonType={pokemonType}
                  active={active === type}
                  onClick={() => setActive(type)}
                >
                  {type}
                </Tabs>
              ))}
            </ButtonGroup>

            <TabContent active={active === 'Stats'}>
              {pokemonDetails.stats.map((item, index) => (
                <TabContentStats key={index}>
                  <StatsName>{item.stat.name}</StatsName>
                  <span>{item.base_stat}</span>
                  <StatsBar
                    baseState={item.base_stat > 100 ? 100 : item.base_stat}
                    type={pokemonType}
                  />
                </TabContentStats>
              ))}
            </TabContent>
            <TabContent active={active === 'Evolves From'}>
              <BoxEvolution>
                {previousSpecies && (
                  <>
                    <img
                      src={`https://cdn.traction.one/pokedex/pokemon/${previousSpecies.id}.png`}
                      alt={pokemonDetails.name}
                    />

                    <img
                      className='iconImg'
                      src={arrowRightIcon}
                      alt='Arrow Right'
                    />
                  </>
                )}

                <img
                  src={`https://cdn.traction.one/pokedex/pokemon/${pokemonDetails.id}.png`}
                  alt={pokemonDetails.name}
                />
              </BoxEvolution>
            </TabContent>
            <TabContent active={active === 'Moves'}>
              <MovesList>
                {pokemonDetails.moves.map((m, index) => (
                  <li key={index}>{m.move.name}</li>
                ))}
              </MovesList>
            </TabContent>
          </TabsContainer>
        </Content>
      </Container>
    );
  else return null;
};
