import React, { ReactChild } from 'react'
import { StyleSheet, TextInput, Text, TextInputProps, View } from 'react-native'

import colors from '../theme/colors'

interface FieldGroupTextProps extends TextInputProps {
  label?: string;
  elementToGroup?: ReactChild
}

const FieldGroupText = React.forwardRef<TextInput, FieldGroupTextProps>((props, ref) => {
  const {label, elementToGroup, ...rest} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.group}>
        <TextInput ref={ref} style={styles.field} {...rest} />
        {elementToGroup && (
          <View style={styles.anotherElement}>
            {elementToGroup}
          </View>
        )}
      </View>
    </View>
  )
})

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
    flex: 1,
    fontSize: 20,
    fontWeight: '400',
    paddingLeft: 10,
    paddingRight: 2,
    color: colors.textLight
  },

  group: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
  },

  anotherElement: {
    borderStartWidth: 0.5,
    borderColor: colors.gray,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default FieldGroupText
