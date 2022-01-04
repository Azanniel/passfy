import React from 'react'
import {TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import colors from '../theme/colors'

const Question: React.FC<TouchableOpacityProps> = ({...rest}) => {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.7}>
      <AntDesign
        name="exclamationcircle"
        size={28}
        color={colors.textLight}
      />
    </TouchableOpacity>
  )
}

export default Question
