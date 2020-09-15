import React from 'react';
import './App.css';
import Users from './Users';
import { gql } from "apollo-boost";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import { Route, HashRouter } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

const getUsersQuery = gql`
{
    todoList {
        _id
        content
        completed
    }
}
`;
const add = async content => {
  return await client.mutate({
    // 引數,content對應的下面的$content
    variables: { content },
    mutation: gql`
          mutation add($content: String!) {
              addTodo(content: $content) {
                  success
                  todoList{
                      _id
                      content
                      completed
                  }
              }
          }
      `,
    refetchQueries: () => {
      return [{ query: getUsersQuery }];
    },
    awaitRefetchQueries: true,
  })
};
const App = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <HashRouter>
          <Route path="/" >
            <Users add={add} />
          </Route>
        </HashRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
