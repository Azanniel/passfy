import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'

import colors from '../theme/colors'
import i18n from '../i18n'

const {height, width} = Dimensions.get('window')

const EmptyPasswords: React.FC = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.image}
        source={require('../assets/empty.png')}
        defaultSource={require('../assets/empty.png')}
        resizeMode='cover'
      />
      <Text style={styles.text}>{i18n.t('emptyListPass')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: width * 0.8,
    height: height * 0.35
  },

  text: {
    marginTop: 15,
    fontSize: 16,
    color: colors.blueViolet,
    textAlign: 'center',
    lineHeight: 24
  }
})

export default EmptyPasswords
