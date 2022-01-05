import * as Device from 'expo-device'

const testID = 'ca-app-pub-3940256099942544/1033173712'
const productionID = testID

export default Device.isDevice && !__DEV__ ? productionID : testID
