import React from 'react';

import {ApolloProvider} from '@apollo/client';

import apolloClient from './services/apollo';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Catalog, Profile} from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Catalog">
          <Stack.Screen
            name="Ricky & Morty"
            component={Catalog}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
