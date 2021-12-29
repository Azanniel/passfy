import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import colors from '../../theme/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },

  header: {
    marginTop: 30
  },

  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: colors.green
  },

  subtitle: {
    fontSize: 13,
    color: colors.textLight,
    marginTop: 10,
    fontWeight: '300'
  },

  contentFields: {
    marginTop: 40
  },

  contentButton: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
