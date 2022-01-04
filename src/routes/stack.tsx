import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from '../screens/Home'
import CreatePass from '../screens/CreatePass'
import EditPass from '../screens/EditPass'
import OnBoarding from '../screens/OnBoarding'
import Information from '../screens/Information'

import colors from '../theme/colors'
import StackParamList from './StackParamList'

const { Navigator, Screen } = createStackNavigator<StackParamList>()

interface StackRoutesProps {
  isFirstAccess: boolean
}

const StackRoutes: React.FC<StackRoutesProps> = ({isFirstAccess}) => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={isFirstAccess ? 'OnBoarding' : 'Home'}
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: colors.background
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true
        }}
      >

        <Screen name='OnBoarding' component={OnBoarding} />
        <Screen name='Home' component={Home} />
        <Screen name='CreatePass' component={CreatePass} />
        <Screen name='EditPass' component={EditPass} />
        <Screen name='Information' component={Information} />

      </Navigator>
    </NavigationContainer>
  )
}

export default StackRoutes
