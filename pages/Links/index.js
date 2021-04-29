import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { Image, Text, View, TouchableOpacity } from 'react-native'

import styles from './styles'
import logoImg from '../../assets/logo.png'

export default function Links() {

  const navigation = useNavigation()

  function navigateToHome() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>

      <Image style={styles.logo} source={logoImg} />

      <Text style={styles.title}>Encontre um link</Text>
      <Text style={styles.subtitle}>Encontre o link para um grupo desejado</Text>

      <TouchableOpacity onPress={navigateToHome} style={styles.goToHome}>
        <Text style={styles.textButton}>IR PARA HOME</Text>
      </TouchableOpacity>
    </View>
  )
}