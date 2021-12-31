import AsyncStorage from '@react-native-async-storage/async-storage'

export async function setNotIsFirstAccess(): Promise<void> {
  await AsyncStorage.setItem('passfy@user:first', 'false')
}

export async function isFirstAccess(): Promise<Boolean> {
  const access = await AsyncStorage.getItem('passfy@user:first')

  if(!access){
    return true
  }

  return access !== 'false'
}
