import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const PokemonsContex = createContext({});

export const PokemonsProvider = ({ children }) => {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [data, setData] = useState(null);
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => setError(err));
  }, [url]);

  useEffect(() => {
    const newList = [];
    const pokemonsName = data?.results;

    pokemonsName?.forEach((item) => {
      setLoading(true);
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
        .then((response) => {
          newList.push(response.data);
          if (newList.length === 20) {
            setLoading(false);
            const orderedList = newList.sort((a, b) => {
              return a.id - b.id;
            });
            setPokemons(orderedList);
          }
        })
        .catch((err) => setError(err));
    });
  }, [data]);

  const handlePreviousPage = () => {
    const previousUrl = data?.previous;

    if (!previousUrl) {
      return;
    }

    setUrl(previousUrl);
  };

  const handleNextPage = () => {
    const nextUrl = data?.next;

    if (!nextUrl) {
      return;
    }

    setUrl(nextUrl);
  };

  return (
    <PokemonsContex.Provider
      value={{
        pokemons,
        handleNextPage,
        handlePreviousPage,
        pokedex,
        setPokedex,
        loading,
        error,
      }}
    >
      {children}
    </PokemonsContex.Provider>
  );
};
