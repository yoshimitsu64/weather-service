import Layout from './components/layout';
import Header from './components/header';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
