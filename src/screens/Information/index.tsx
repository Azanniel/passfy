import React from 'react'
import { Image, SafeAreaView, View, Text } from 'react-native'

import i18n from '../../i18n'

import styles from './styles'

const Information = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} resizeMode='contain' source={require('../../assets/nameApp.png')} />
        <Text style={styles.version}>{i18n.t('versionDescription')}</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.text}>
          {i18n.t('informationAboutPass')}
        </Text>
      </View>

      <View style={styles.footer}>
        <Image style={[styles.image, {height: 50}]} resizeMode='contain' source={require('../../assets/company.png')} />
      </View>
    </SafeAreaView>
  )
}

export default Information
