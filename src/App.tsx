import Layout from '@components/layout';
import Content from '@components/content';
import WeekWeatherBar from '@components/weekWeatherBar';
import ErrorBoundary from '@components/errorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Content />
        <WeekWeatherBar />
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
