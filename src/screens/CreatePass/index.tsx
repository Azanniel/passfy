import React from 'react'
import {
  View, Text, TextInput,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AdMobInterstitial } from 'expo-ads-admob'
import uuid from 'react-native-uuid'

import FieldText from '../../components/FieldText'
import MediumButton from '../../components/MediumButton'

import { savePassword } from '../../storage/passwordStorage'
import StackParamList from '../../routes/StackParamList'
import adUnitIdInterstitial from '../../adMobIDs/adUnitIdInterstitial'

import styles from './styles'
import i18n from '../../i18n'

type NavigationProps = StackNavigationProp<StackParamList, 'CreatePass'>;

const CreatePass: React.FC = () => {
  const navigation = useNavigation<NavigationProps>()

  const domainRef = React.createRef<TextInput>()
  const accountRef = React.createRef<TextInput>()
  const passRef = React.createRef<TextInput>()

  const [domain, setDomain] = React.useState('')
  const [account, setAccount] = React.useState('')
  const [pass, setPass] = React.useState('')

  const [loading, setLoading] = React.useState(false)
  const [validation, setValidation] = React.useState(false)

  const showInterstitialPublish = async () => {
    await AdMobInterstitial.setAdUnitID(adUnitIdInterstitial) // Test ID, Replace with your-admob-unit-id
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true})
    await AdMobInterstitial.showAdAsync()
  }

  const submitCreatePass = async () => {
    setValidation(false)

    if (!domain || !account || !pass) {
      setValidation(true)
      return false
    }

    setLoading(true)

    await savePassword({
      id: uuid.v4().toString(),
      account,
      domain,
      pass
    })

    await showInterstitialPublish()

    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }]
    })
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
          <Text style={styles.title}>{i18n.t('titleNewPass')}</Text>
          <Text style={styles.subtitle}>{i18n.t('notificationAboutSave')}</Text>
        </View>

        <View style={styles.contentFields}>
          <FieldText
            ref={domainRef}
            label={i18n.t('fieldDomain')}
            placeholder='E-mail'
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
            onChangeText={text => setPass(text)}
            onSubmitEditing={submitCreatePass}
          />
        </View>

        <View style={{ display: validation ? 'flex' : 'none' }}>
          <Text style={{ fontSize: 12, color: 'red', marginTop: 10 }}>
            {i18n.t('validationMessage')}
          </Text>
        </View>

        <View style={styles.contentButton}>
          <MediumButton disabled={loading} onPress={submitCreatePass} title={i18n.t('buttonSave')} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default CreatePass
