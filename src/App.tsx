import React from 'react';

import {ApolloProvider} from '@apollo/react-hooks';
import Navigation from './navigation';

import api from './services';

const App = () => {
  return (
    <ApolloProvider client={api}>
      <Navigation />
    </ApolloProvider>
  );
};

export default App;
