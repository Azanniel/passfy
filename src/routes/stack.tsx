import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from '../screens/Home'
import CreatePass from '../screens/CreatePass'
import EditPass from '../screens/EditPass'

import colors from '../theme/colors'
import StackParamList from './StackParamList'

const { Navigator, Screen } = createStackNavigator<StackParamList>()

const StackRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: colors.background
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true
        }}
      >

        <Screen name='Home' component={Home} />
        <Screen name='CreatePass' component={CreatePass} />
        <Screen name='EditPass' component={EditPass} />

      </Navigator>
    </NavigationContainer>
  )
}

export default StackRoutes
