import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { Image, Text, View, TouchableOpacity } from 'react-native'

import styles from './styles'
import logoImg from '../../assets/logo.png'

export default function Home() {

  const navigation = useNavigation()

  function navigateToLinks() {
    navigation.navigate('Links')
  }

  return (
    <View style={styles.container}>

      <Image style={styles.logo} source={logoImg} />

      <Text style={styles.title}>Bem vindo(a)</Text>
      <Text style={styles.subtitle}>Encontre o link desejado ou cadastre o seu</Text>

      <TouchableOpacity onPress={navigateToLinks} style={styles.goToLinks}>
        <Text style={styles.textButton}>VER LINKS</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToLinks} style={styles.goToRegister}>
        <Text style={styles.textButton}>CADASTRAR LINK DE GRUPO</Text>
      </TouchableOpacity>
    </View>
  )
}