import AsyncStorage from '@react-native-community/async-storage';

export const createFave = faveId => {
  try {
    return AsyncStorage.setItem(
      `${faveId}`,
      JSON.stringify({id: faveId, fave_on: new Date()}),
    );
  } catch (e) {
    return false;
  }
};

export const deleteFave = faveId => {
  return AsyncStorage.removeItem(`${faveId}`);
};

export const queryFaves = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const allStores = await AsyncStorage.multiGet(keys);
    return allStores.filter(store => store[1].includes('faved_on')); // store[1] is checking index 1 fave_on
  } catch (e) {
    return false;
  }
};
