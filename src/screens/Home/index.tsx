import React from 'react'
import {ActivityIndicator, SafeAreaView, ScrollView, View, Share} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import NetInfo from '@react-native-community/netinfo'

import Welcome from '../../components/Welcome'
import Question from '../../components/Question'
import BigButton from '../../components/BigButton'
import Password from '../../components/Password'
import EmptyPasswords from '../../components/EmptyPasswords'
import AdMobBannerMarketing from '../../components/AdMobBannerMarketing'

import IconSave from '../../assets/save.png'
import IconRefer from '../../assets/refer.png'
import StackParamList from '../../routes/StackParamList'
import { getAllPasswords } from '../../storage/passwordStorage'
import IPassword from '../../types/IPassword'

import styles from './styles'
import colors from '../../theme/colors'
import i18n from '../../i18n'

type NavigationProps = StackNavigationProp<StackParamList, 'Home'>;

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProps>()

  const [connected, setConnected] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [passwords, setPasswords] = React.useState<IPassword[]>([])

  const navigateToCreatePass = () => {
    navigation.navigate('CreatePass')
  }

  const navigateToEditPass = (item: IPassword) => {
    navigation.navigate('EditPass', item)
  }

  const shareApplicationWithFriends = async () => {
    try {
      await Share.share({
        title: i18n.t('shareTitle'),
        message: i18n.t('shareDescription')
      })
    } catch (error) {
      console.log(error)
    }
  }

  const renderPasswords = () => {
    if(passwords.length > 0){
      return passwords.map((item) => (
        <Password key={item.id} item={item} goToEdit={() => {navigateToEditPass(item)}} />
      ))
    }else{
      return <EmptyPasswords />
    }
  }

  const renderLoading = () => {
    return <ActivityIndicator size="small" color={colors.greenLight} />
  }

  const shouldRenderAdMob = () => {
    return (
      <View style={[styles.adMob, { display: connected ? 'flex' : 'none' }]}>
        <AdMobBannerMarketing />
      </View>
    )
  }

  React.useEffect(() => {
    getAllPasswords().then((response) => {
      setPasswords(response)
      setLoading(false)
    })
  }, [])

  React.useEffect(() => {
    NetInfo.fetch().then(state => {
      setConnected(state.isInternetReachable ?? false)
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView
        style={styles.content}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.header}>
          <Welcome />
          <Question />
        </View>

        <View style={styles.contentButtonsAction}>
          <BigButton title={i18n.t('newPass')} icon={IconSave} onPress={navigateToCreatePass} />
          <BigButton title={i18n.t('referFriend')} icon={IconRefer} onPress={shareApplicationWithFriends} />
        </View>

        {shouldRenderAdMob()}

        <View style={styles.contentPasswords}>
          {loading ? renderLoading() : renderPasswords()}
        </View>

      </ScrollView>

    </SafeAreaView>
  )
}

export default Home
