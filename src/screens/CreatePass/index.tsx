import React from 'react'
import {
  View, Text,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import FieldText from '../../components/FieldText'
import MediumButton from '../../components/MediumButton'

import styles from './styles'

const CreatePass: React.FC = () => {
  return (
    <KeyboardAwareScrollView
      style={styles.container}
      enableOnAndroid={true}
      keyboardShouldPersistTaps='always'
      showsVerticalScrollIndicator={false}
    >
      <View style={{ paddingHorizontal: 20 }}>
        <View style={styles.header}>
          <Text style={styles.title}>Nova senha</Text>
          <Text style={styles.subtitle}>Não se preocupe, sua senha ficará somente no seu smartphone.</Text>
        </View>

        <View style={styles.contentFields}>
          <FieldText label='Site/Serviço' placeholder='G-mail' />

          <FieldText label='Conta' placeholder='joao@gmail.com' />

          <FieldText label='Senha' placeholder='****' secureTextEntry />
        </View>

        <View style={styles.contentButton}>
          <MediumButton title='Guardar' />
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default CreatePass
