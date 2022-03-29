import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createUploadLink } from 'apollo-upload-client';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Nav from './components/Nav';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleProduct from './pages/SingleProduct';
import Profile from './pages/Profile';
import OrderHistory from './pages/OrderHistory';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/Profile" component={Profile} />
              <Route exact path="/products:id" component={SingleProduct} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );

}

export default App;
