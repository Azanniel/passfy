import React from 'react'
import * as Device from 'expo-device'
import { AdMobBanner } from 'expo-ads-admob'

const testID = 'ca-app-pub-3940256099942544/6300978111'
const productionID = 'my-id'
const adUnitID = Device.isDevice && !__DEV__ ? productionID : testID;

const AdMobBannerMarketing = () => {
  return (
    <AdMobBanner
      bannerSize="banner"
      adUnitID={adUnitID}
      servePersonalizedAds
      onDidFailToReceiveAdWithError={(error) => {
        console.log(error)
      }} />
  )
}

export default AdMobBannerMarketing
