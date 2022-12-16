import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LionScreen} from './screens/LionScreen';
import {TigerScreen} from './screens/TigerScreen';
import {ElephantScreen} from './screens/ElephantScreen';
import {HomeScreen} from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Lion"
          component={LionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tiger"
          component={TigerScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Elephant"
          component={ElephantScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
