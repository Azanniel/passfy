import React from 'react'
import {ActivityIndicator, SafeAreaView, ScrollView, View} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import Welcome from '../../components/Welcome'
import Question from '../../components/Question'
import BigButton from '../../components/BigButton'
import Password from '../../components/Password'
import EmptyPasswords from '../../components/EmptyPasswords'

import IconSave from '../../assets/save.png'
import IconExport from '../../assets/export.png'
import StackParamList from '../../routes/StackParamList'
import { getAllPasswords } from '../../storage/passwordStorage'
import IPassword from '../../types/IPassword'

import styles from './styles'
import colors from '../../theme/colors'

type NavigationProps = StackNavigationProp<StackParamList, 'Home'>;

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProps>()

  const [loading, setLoading] = React.useState(true)
  const [passwords, setPasswords] = React.useState<IPassword[]>([])

  const navigateToCreatePass = () => {
    navigation.navigate('CreatePass')
  }

  const renderPasswords = () => {
    if(passwords.length > 0){
      return passwords.map((item) => (
        <Password key={item.id} item={item} />
      ))
    }else{
      return <EmptyPasswords />
    }
  }

  const renderLoading = () => {
    return <ActivityIndicator size="small" color={colors.greenLight} />
  }

  React.useEffect(() => {
    getAllPasswords().then((response) => {
      setPasswords(response)
      setLoading(false)
    })
  }, [])

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
          <BigButton title='Exportar ou Importar' icon={IconExport} />
        </View>

        <View style={styles.contentPasswords}>
          {loading ? renderLoading() : renderPasswords()}
        </View>

      </ScrollView>

    </SafeAreaView>
  )
}

export default Home
