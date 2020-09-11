import React from 'react';
import './App.css';
import Users from './Users';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});
const App = () => {


  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Users />
      </ApolloProvider>
    </div>
  );
}

export default App;
