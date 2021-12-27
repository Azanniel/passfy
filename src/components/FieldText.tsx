import React from 'react'
import { StyleSheet, TextInput, Text, TextInputProps, View } from 'react-native'

import colors from '../theme/colors'

interface FieldTextProps extends TextInputProps {
  label?: string
}

const FieldText: React.FC<FieldTextProps> = ({ label, ...rest }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.field} {...rest} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    marginHorizontal: 0,
  },

  label: {
    paddingLeft: 5,
    color: colors.textLight,
    marginBottom: 5
  },

  field: {
    height: 56,
    backgroundColor: colors.white,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: '400',
    paddingLeft: 10,
    color: colors.textLight
  }
})

export default FieldText