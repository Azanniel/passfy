import React from 'react'
import {
  View, Text, TextInput,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import FieldText from '../../components/FieldText'
import MediumButton from '../../components/MediumButton'

import styles from './styles'

const CreatePass: React.FC = () => {
  const domainRef = React.createRef<TextInput>()
  const accountRef = React.createRef<TextInput>()
  const passRef = React.createRef<TextInput>()

  const [domain, setDomain] = React.useState('')
  const [account, setAccount] = React.useState('')
  const [pass, setPass] = React.useState('')

  const [validation, setValidation] = React.useState(false)

  const submitCreatePass = () => {
    console.log('submit')

    if(!domain || !account || !pass) {
      setValidation(true)
    }
  }

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      enableOnAndroid={false}
      keyboardShouldPersistTaps='always'
      showsVerticalScrollIndicator={false}
    >
      <View style={{ paddingHorizontal: 20 }}>
        <View style={styles.header}>
          <Text style={styles.title}>Nova senha</Text>
          <Text style={styles.subtitle}>Não se preocupe, sua senha ficará somente no seu smartphone.</Text>
        </View>

        <View style={styles.contentFields}>
          <FieldText
            ref={domainRef}
            label='Site/Serviço'
            placeholder='G-mail'
            onChangeText={text => setDomain(text)}
            onSubmitEditing={() => {
              accountRef.current?.focus()
            }}
          />

          <FieldText
            ref={accountRef}
            label='Conta'
            placeholder='joao@gmail.com'
            keyboardType='email-address'
            autoCapitalize='none'
            autoCompleteType='off'
            onChangeText={text => setAccount(text)}
            onSubmitEditing={() => {
              passRef.current?.focus()
            }}
          />

          <FieldText
            ref={passRef}
            label='Senha'
            placeholder='****'
            autoCompleteType='off'
            secureTextEntry
            onChangeText={text => setPass(text)}
            onSubmitEditing={submitCreatePass}
          />
        </View>

        <View style={{display: validation ? 'flex' : 'none'}}>
          <Text style={{ fontSize: 12, color: 'red', marginTop: 10}}>
            *Preencha todos os campos para salvarmos sua senha
          </Text>
        </View>

        <View style={styles.contentButton}>
          <MediumButton onPress={submitCreatePass} title='Guardar' />
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default CreatePass
