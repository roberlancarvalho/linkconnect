import React from 'react';
import { StatusBar } from 'react-native'
import AppStack from './routes/AppStack'

export default function App() {

  return (
    <>
      <AppStack />
      <StatusBar barStyle="light-content" backgroundColor="#F5F5F5" />
    </>
  )
}