import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home';
import Links from '../pages/Links';

const { Navigator, Screen } = createStackNavigator()

function AppStack() {

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }} >
        <Screen name="Home" component={Home} />
        <Screen name="Links" component={Links} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack