import React from 'react'
import { AdMobBanner } from 'expo-ads-admob'
import adUnitID from '../adMobIDs/adUnitIdBanner'

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
