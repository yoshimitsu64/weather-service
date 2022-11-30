import { ThemeProvider } from 'styled-components';

import Layout from '@components/layout';
import Header from '@components/header';
import Content from '@components/content';
import { theme } from '@constants/theme';
import Footer from '@components/footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
