import React from 'react'
import { StatusBar } from 'expo-status-bar';
import * as LocalAuthentication from 'expo-local-authentication'
import AppLoading from 'expo-app-loading'

import StackRoutes from './src/routes/stack';
import colors from './src/theme/colors';
import i18n from './src/i18n';

export default function App() {
  const [appReady, setAppReady] = React.useState(false)

  async function authenticate() {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: i18n.t('authMessage')
    })

    if(result.success){
      setAppReady(true)
    }
  }

  React.useEffect(() => {
    authenticate()
  }, [])

  if(!appReady){
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style='auto' backgroundColor={colors.background} />
      <StackRoutes />
    </>
  );
}
