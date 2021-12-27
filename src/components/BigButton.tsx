import React from 'react'
import {
  StyleSheet, Dimensions, Text, TouchableOpacity, 
  TouchableOpacityProps, Image, ImageSourcePropType,
} from 'react-native'

import colors from '../theme/colors'

interface BigButtonProps extends TouchableOpacityProps {
  title: string,
  icon: ImageSourcePropType
}

const { width, height } = Dimensions.get('window')

const BigButton: React.FC<BigButtonProps> = ({ title, icon,...rest }) => {
  return (
    <TouchableOpacity 
      style={styles.container} 
      {...rest} 
      activeOpacity={0.7}
    >
      
      <Text style={styles.text}>{title}</Text>
      <Image style={styles.icon} source={icon} />

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.42,
    minHeight: height * 0.2 + 10,
    borderWidth: 1.5,
    borderColor: colors.gray,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 15,
  },

  text: {
    fontWeight: 'bold',
    fontSize: width * 0.05,
    color: colors.text,
    marginBottom: 10
  },

  icon: {
    marginTop: 'auto',
    width: width * 0.1,
    height: width * 0.1
  }
})

export default BigButton