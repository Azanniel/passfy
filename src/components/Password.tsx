import React from 'react'
import {
  StyleSheet, View, Text,
  TouchableOpacity, TouchableOpacityProps
} from 'react-native'
import Toast from 'react-native-tiny-toast'
import { Feather } from '@expo/vector-icons'
import * as Clipboard from 'expo-clipboard'

import IPassword from '../types/IPassword'
import colors from '../theme/colors'

interface PasswordProps extends TouchableOpacityProps {
  item: IPassword,
  goToEdit(): void
}

const Password: React.FC<PasswordProps> = ({item, goToEdit,...rest}) => {
  const [colorIcon, setColorIcon] = React.useState<string>()

  const copyToClipboard = (text: string) => {
    Clipboard.setString(text)
    notifyMessage('Copiado para área de transferência!')
  }

  const notifyMessage = (text: string) => {
    Toast.show(text, {
      containerStyle: {
        backgroundColor: colors.textLight
      }
    })
  }

  React.useEffect(() => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    setColorIcon('#' + String(randomColor))
  }, [])

  return (
    <TouchableOpacity
      {...rest}
      style={styles.container}
      activeOpacity={0.8}
      onPress={goToEdit}
      onLongPress={() => { copyToClipboard(item.pass) }}
    >
      <View style={[styles.icon, {backgroundColor: colorIcon}]}>
        <Text style={styles.iconText}>{String(item.domain).substr(0,1)}</Text>
      </View>

      <View style={styles.contentData}>
        <Text numberOfLines={1} style={styles.domain}>{item.domain}</Text>
        <Text numberOfLines={2} style={styles.account}>{item.account}</Text>
      </View>

      <View style={styles.copyButton}>
        <Feather name="clipboard" size={24} color="black" />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    marginVertical: 4,
    borderRadius: 10,
    padding: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
  },

  icon: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#61a05b'
  },

  iconText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.white,
  },

  contentData: {
    flex: 1,
  },

  domain: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
  },

  account: {
    fontSize: 12,
    marginTop: 'auto',
    marginBottom: 4,
    fontWeight: '300'
  },

  copyButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Password
