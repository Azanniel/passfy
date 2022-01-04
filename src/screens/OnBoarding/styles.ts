import { StyleSheet, Dimensions } from 'react-native'

import colors from '../../theme/colors'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  image: {
    width: width * 0.8,
    height: height * 0.4,
  },

  title: {
    color: colors.green,
    fontWeight: 'bold'
  },

  subtitle: {
    color: colors.textLight,
    paddingHorizontal: width * 0.04
  }
})
