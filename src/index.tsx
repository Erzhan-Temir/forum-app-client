import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {BrowserRouter} from 'react-router-dom';
import ErrorBoundary from "./components/ErrorBoundary";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  credentials: "include",
  cache: new InMemoryCache({
    resultCaching: false,
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <ErrorBoundary>{[<App key="App" />]}</ErrorBoundary>
        </ApolloProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

