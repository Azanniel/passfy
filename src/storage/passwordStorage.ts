import AsyncStorage from '@react-native-async-storage/async-storage';

import IPassword from '../types/IPassword'

async function getAllPasswords(): Promise<IPassword[]> {
  const value = await AsyncStorage.getItem('passfy@passwords')

  return value != null ? JSON.parse(value) : []
}
