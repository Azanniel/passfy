import React from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Feather } from '@expo/vector-icons';

import colors from '../theme/colors'

interface DeleteButtonProps extends TouchableOpacityProps {}

const DeleteButton: React.FC<DeleteButtonProps> = ({...rest}) => {
  return (
    <TouchableOpacity style={styles.container} {...rest} activeOpacity={0.7}>
      <Feather name="trash-2" size={26} color={colors.white} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    width: 56,
    backgroundColor: colors.red,
    borderRadius: 10
  },
})

export default DeleteButton
