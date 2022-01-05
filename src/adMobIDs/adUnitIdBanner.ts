import * as Device from 'expo-device'

const testID = 'ca-app-pub-3940256099942544/6300978111'
const productionID = testID

export default Device.isDevice && !__DEV__ ? productionID : testID
