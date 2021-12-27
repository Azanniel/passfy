import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import colors from '../theme/colors'

interface MediumButtonProps extends TouchableOpacityProps {
  title: string
}

const MediumButton: React.FC<MediumButtonProps> = ({title, ...rest}) => {
  return (
    <TouchableOpacity style={styles.container} {...rest} activeOpacity={0.7}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    width: 200,
    backgroundColor: colors.green,
    borderRadius: 10
  },

  title: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold'
  }
})

export default MediumButton