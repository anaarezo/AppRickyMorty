import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeNavigationTabs from './BottomTabs';

import {Home, Login, Catalog} from '../screens';

const Stack = createNativeStackNavigator();

export default () => {
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={HomeNavigationTabs} />
  </Stack.Navigator>;
};

export function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export function CatalogNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="Catalog" component={Catalog} />
    </Stack.Navigator>
  );
}
