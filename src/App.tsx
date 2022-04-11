import React from 'react';

import {ApolloProvider} from '@apollo/client';
import Navigation from './navigation';

import apolloClient from './services/apollo';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Navigation />
    </ApolloProvider>
  );
};

export default App;
