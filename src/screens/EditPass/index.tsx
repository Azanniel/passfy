import React from 'react'
import {
  View, Text, TextInput,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import FieldText from '../../components/FieldText'
import MediumButton from '../../components/MediumButton'
import DeleteButton from '../../components/DeleteButton'

import StackParamList from '../../routes/StackParamList'
import IPassword from '../../types/IPassword'
import { deletePassword, updatePassword } from '../../storage/passwordStorage'

import styles from './styles'
import i18n from '../../i18n'

type NavigationProps = StackNavigationProp<StackParamList, 'EditPass'>;

const EditPass: React.FC = () => {
  const navigation = useNavigation<NavigationProps>()
  const route = useRoute<RouteProp<StackParamList, 'EditPass'>>();

  const domainRef = React.createRef<TextInput>()
  const accountRef = React.createRef<TextInput>()
  const passRef = React.createRef<TextInput>()

  const [password, setPassword] = React.useState<IPassword>()
  const [domain, setDomain] = React.useState('')
  const [account, setAccount] = React.useState('')
  const [pass, setPass] = React.useState('')

  const [loading, setLoading] = React.useState(false)

  const [validation, setValidation] = React.useState(false)

  const resetNavigationToHome = () => {
    navigation.reset({
      index: 0,
      routes: [
        {name: 'Home'}
      ]
    })
  }

  const submitEditPass = async () => {
    setValidation(false)

    if(!domain || !account || !pass) {
      setValidation(true)
      return false
    }

    if(password){
      setLoading(true)
      await updatePassword({
        id: password.id,
        domain,
        account,
        pass
      })

      resetNavigationToHome()
    }
  }

  const deletePass = async () => {
    if(password){
      setLoading(true)

      await deletePassword(password.id)
      resetNavigationToHome()
    }
  }

  React.useEffect(() => {
    setPassword(route.params)

    setDomain(route.params.domain)
    setAccount(route.params.account)
    setPass(route.params.pass)
  }, [route.params])

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      enableOnAndroid={false}
      keyboardShouldPersistTaps='always'
      showsVerticalScrollIndicator={false}
    >
      <View style={{ paddingHorizontal: 20 }}>
        <View style={styles.header}>
          <Text style={styles.title}>{i18n.t('titleUpdatePass')}</Text>
          <Text style={styles.subtitle}>{i18n.t('notificationAboutSave')}</Text>
        </View>

        <View style={styles.contentFields}>
          <FieldText
            ref={domainRef}
            label={i18n.t('fieldDomain')}
            placeholder='E-mail'
            value={domain}
            onChangeText={text => setDomain(text)}
            onSubmitEditing={() => {
              accountRef.current?.focus()
            }}
          />

          <FieldText
            ref={accountRef}
            label={i18n.t('fieldAccount')}
            placeholder='joao@gmail.com'
            keyboardType='email-address'
            autoCapitalize='none'
            autoCompleteType='off'
            value={account}
            onChangeText={text => setAccount(text)}
            onSubmitEditing={() => {
              passRef.current?.focus()
            }}
          />

          <FieldText
            ref={passRef}
            label={i18n.t('fieldPass')}
            placeholder='****'
            autoCompleteType='off'
            secureTextEntry
            value={pass}
            onChangeText={text => setPass(text)}
            onSubmitEditing={submitEditPass}
          />
        </View>

        <View style={{display: validation ? 'flex' : 'none'}}>
          <Text style={{ fontSize: 12, color: 'red', marginTop: 10}}>
            {i18n.t('validationMessage')}
          </Text>
        </View>

        <View style={styles.contentButton}>
          <DeleteButton disabled={loading} onPress={deletePass} />
          <MediumButton disabled={loading} onPress={submitEditPass} title={i18n.t('buttonSave')} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default EditPass
