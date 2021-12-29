import AsyncStorage from '@react-native-async-storage/async-storage';

import IPassword from '../types/IPassword'

export async function getAllPasswords(): Promise<IPassword[]> {
  const value = await AsyncStorage.getItem('passfy@passwords')

  return value != null ? JSON.parse(value) : []
}

export async function savePassword(item: IPassword): Promise<void> {
  const passwords = await getAllPasswords()
  const newPasswords = [
    item,
    ...passwords
  ]

  await AsyncStorage.setItem(
    'passfy@passwords',
    JSON.stringify(newPasswords)
  )
}
