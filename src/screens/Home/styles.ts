import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  contentButtonsAction: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  contentPasswords: {
    marginTop: 20,
    marginBottom: 40
  },

  adMob: {
    marginTop: 10
  }
})
