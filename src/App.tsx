import Layout from '@components/layout';
import Content from '@components/content';
import Footer from '@components/footer';
import ErrorBoundary from './containers/errorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Content />
        <Footer />
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
