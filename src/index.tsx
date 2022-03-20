import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { ErrorBoundary } from 'components/errors';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainRoutes from 'routes/Routes';
import 'styles/index.css';
import theme from 'styles/theme';
import { store } from 'utilities/store';

function App() {
  return (
    <ErrorBoundary>
      <MainRoutes />
    </ErrorBoundary>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
