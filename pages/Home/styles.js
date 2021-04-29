import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight + 16,
  },

  logo: {
    margin: 50,
    width: 95,
    height: 80,
  },

  title: {
    paddingTop: 25,
    fontSize: 22,
  },

  goToLinks: {
    margin: 20,
    backgroundColor: '#7866F2',
    width: '80%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },

  goToRegister: {
    backgroundColor: '#78808D',
    width: '80%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textButton: {
    color: 'white',
    fontSize: 18,
  }
})