import AsyncStorage from '@react-native-community/async-storage';

export const createFave = async faveId => {
  try {
    await AsyncStorage.setItem(
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
    return allStores.filter(store => store[1].includes('fave_on'));
  } catch (e) {
    return false;
  }
};
