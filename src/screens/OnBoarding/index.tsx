import React from 'react'
import { Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Swiper from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import StackParamList from '../../routes/StackParamList'
import { setNotIsFirstAccess } from '../../storage/userStorage'

import colors from '../../theme/colors'
import styles from './styles'
import i18n from '../../i18n'

type NavigationProps = StackNavigationProp<StackParamList, 'OnBoarding'>;

const OnBoarding = () => {
  const navigation = useNavigation<NavigationProps>()

  const doneBoardingApp = async () => {
    await setNotIsFirstAccess()

    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }]
    })
  }

  return (
    <Swiper
      bottomBarHighlight={false}
      showSkip={false}
      nextLabel={<Feather name="chevron-right" size={32} color={colors.textLight} />}
      onDone={doneBoardingApp}
      titleStyles={styles.title}
      subTitleStyles={styles.subtitle}
      imageContainerStyles={{
        paddingBottom: 10
      }}
      pages={[
        {
          title: i18n.t('bWelcome'),
          subtitle: i18n.t('bWelcomeDescription'),
          backgroundColor: colors.background,
          image: <Image style={styles.image} resizeMode='contain' source={require('../../assets/ob01.png')} />
        },
        {
          title: i18n.t('bHoldCopy'),
          subtitle: i18n.t('bHoldCopyDescription'),
          backgroundColor: colors.background,
          image: <Image style={styles.image} resizeMode='contain' source={require('../../assets/ob02.png')} />
        },
        {
          title: i18n.t('bSecure'),
          subtitle: i18n.t('bSecureDescription'),
          backgroundColor: colors.background,
          image: <Image style={styles.image} resizeMode='contain' source={require('../../assets/ob03.png')} />
        },
      ]}
    />
  )
}

export default OnBoarding
