import React from 'react'
import {TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import colors from '../theme/colors'

const Question: React.FC = () => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <AntDesign
        name="questioncircle"
        size={28}
        color={colors.textLight}
      />
    </TouchableOpacity>
  )
}

export default Question
