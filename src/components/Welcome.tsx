import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import Logo from '../assets/logo.png'
import i18n from '../i18n'
import colors from '../theme/colors'

const Welcome: React.FC = () => {
  return (
    <View style={styles.content}>
      <Image style={styles.image} source={Logo} />
      <Text style={styles.text}>{i18n.t('welcome')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 6
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginLeft: 8
  }
})

export default Welcome
