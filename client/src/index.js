import React from 'react';
import { render } from 'react-dom';
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo';
import { GlobalStyles } from './GlobalStyles';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { persistCache } from 'apollo-cache-persist'
import { StoreProvider } from './store/store';


const cache = new InMemoryCache();
persistCache({
  cache,
  storage: localStorage
});

if (localStorage['apollo-cache-persist']) {
  const cacheData = JSON.parse(localStorage['apollo-cache-persist']);
  cache.restore(cacheData)
}

const client = new ApolloClient({
  cache,
  uri: 'http://localhost:5000/graphql',
  request: operation => {
    operation.setContext(context => ({
      headers: {
        ...context.headers,
        authorization: localStorage.getItem('token')
      }
    }))
  }
});

render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <StoreProvider>
        <GlobalStyles />
        <App />
      </StoreProvider>
    </ApolloProvider>
  </BrowserRouter>, document.getElementById('root'));