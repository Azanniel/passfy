import React from 'react'
import {SafeAreaView, ScrollView, View} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import Welcome from '../../components/Welcome'
import Question from '../../components/Question'
import BigButton from '../../components/BigButton'
import Password from '../../components/Password'

import IconSave from '../../assets/save.png'
import IconExport from '../../assets/export.png'
import StackParamList from '../../routes/StackParamList'

import styles from './styles'

type NavigationProps = StackNavigationProp<StackParamList, 'Home'>;

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProps>()

  const navigateToCreatePass = () => {
    navigation.navigate('CreatePass')
  }

  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
    
        <View style={styles.header}>
          <Welcome />
          <Question />
        </View>

        <View style={styles.contentButtonsAction}>
          <BigButton title='Guardar nova senha' icon={IconSave} onPress={navigateToCreatePass} />
          <BigButton title='Exportar minhas senhas' icon={IconExport} />
        </View>

        <View style={styles.contentPasswords}>
          <Password item={{domain: 'Gmail', account: 'testemeiosangue', pass: '123'}} />
        </View>

      </ScrollView>

    </SafeAreaView>
  )
}

export default Home