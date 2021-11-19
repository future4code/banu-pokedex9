import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';

import { theme } from './themes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Pokedex</h1>
    </ThemeProvider>
  );
}

export default App;
