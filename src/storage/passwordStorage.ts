import AsyncStorage from '@react-native-async-storage/async-storage'

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

export async function updatePassword(item: IPassword): Promise<void> {
  const passwords = await getAllPasswords()
  const newPasswords: IPassword[] = []

  passwords.forEach((password) => {
    if(password.id === item.id){
      newPasswords.push(item)
    }else{
      newPasswords.push(password)
    }
  })

  console.log(newPasswords)

  await AsyncStorage.setItem(
    'passfy@passwords',
    JSON.stringify(newPasswords)
  )
}

export async function deletePassword(id: string): Promise<void> {
  const passwords = await getAllPasswords()
  const newPasswords = passwords.filter((item) => {
    if(item.id != id){
      return item
    }
  })

  await AsyncStorage.setItem(
    'passfy@passwords',
    JSON.stringify(newPasswords)
  )
}
