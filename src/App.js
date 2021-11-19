import { ThemeProvider } from 'styled-components';

import { theme } from './themes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Pokedex</h1>
    </ThemeProvider>
  );
}

export default App;
