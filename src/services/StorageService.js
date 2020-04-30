import { USER_DATA_KEY } from '../constants/asyncStorageKeys';
import { AsyncStorage } from 'react-native';

export const setUser = async userData => await AsyncStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));

export const getUser = async () => {
    const userData = await AsyncStorage.getItem(USER_DATA_KEY);
    return JSON.parse(userData);
}

export const removeUser = async () => await AsyncStorage.removeItem(USER_DATA_KEY);