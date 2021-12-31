import React from 'react'
import { StatusBar } from 'expo-status-bar';
import * as LocalAuthentication from 'expo-local-authentication'
import AppLoading from 'expo-app-loading'

import StackRoutes from './src/routes/stack'
import {isFirstAccess} from './src/storage/userStorage'

import colors from './src/theme/colors';
import i18n from './src/i18n';

export default function App() {
  const [appReady, setAppReady] = React.useState(false)
  const [firstAccess, setFirstAccess] = React.useState(true)

  async function authenticate() {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: i18n.t('authMessage')
    })

    if(result.success){
      setAppReady(true)
    }
  }

  React.useEffect(() => {
    isFirstAccess().then(result => {
      if(!result){
        setFirstAccess(false)
        authenticate()
      }else{
        setAppReady(true)
      }
    })
  }, [])

  if(!appReady){
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style='auto' backgroundColor={colors.background} />
      <StackRoutes isFirstAccess={firstAccess} />
    </>
  );
}
