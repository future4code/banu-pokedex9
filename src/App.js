import { ThemeProvider } from 'styled-components';
import { Pokelist } from './components/PokeList';
import { PokemonsProvider } from './context/PokemonContext';
import { GlobalStyles } from './styles/GlobalStyles';

import { theme } from './themes';

function App() {
  return (
    <PokemonsProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <h1>Pokedex</h1>
        <Pokelist />
      </ThemeProvider>
    </PokemonsProvider>
  );
}

export default App;
