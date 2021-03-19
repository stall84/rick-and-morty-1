import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * @description Below importing and configuring Apollo's GraphQL client.
 */
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

// Testing gql connection and tx/rx with hardcoded query below
// REMEMBER TO REMOVE BEFORE PROD BUILD
  // client
  //   .query({
  //     query: gql`
  //       query GetCharacters {
  //         characters {
  //           info {
  //             count
  //             pages
  //             next
  //             prev
  //           }
  //           results {
  //             id
  //             name
  //           }
  //         }
  //       }
  //     `
  //   }).then((result) => console.log('GQL Query Result: ', result))
  //     .catch((error) => console.log('The following error occurred: ', error))



ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
