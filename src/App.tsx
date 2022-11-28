import { ThemeProvider } from 'styled-components';

import Layout from '@components/layout';
import Header from '@components/header';
import { theme } from '@constants/theme';
import Content from '@components/content';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />
        <Content />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
