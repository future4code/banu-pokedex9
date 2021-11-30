import { BrowserRouter } from 'react-router-dom';

import { Router } from './routes';

import { ThemeProvider } from 'styled-components';
import { PokemonsProvider } from './context/PokemonContext';
import { GlobalStyles } from './styles/GlobalStyles';

import { theme } from './themes';

function App() {
  return (
    <BrowserRouter>
      <PokemonsProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Router />
          {/* <Pokelist /> */}
        </ThemeProvider>
      </PokemonsProvider>
    </BrowserRouter>
  );
}

export default App;
