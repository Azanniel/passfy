import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'
import colors from '../../theme/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight,
  },

  header: {
    marginTop: 20,
    alignItems: 'center',
  },

  image: {
    width: '70%',
    height: 80
  },

  version: {
    fontSize: 14,
    color: colors.textLight
  },

  body: {
    height: '50%',
    width: '85%',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderStyle: 'dotted',
    borderRadius: 10,
    borderColor: colors.gray,
    padding: 15
  },

  text: {
    marginTop: 5,
    lineHeight: 28,
    color: colors.text,
    fontSize: 18,
    textAlign: 'justify'
  },

  footer: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
