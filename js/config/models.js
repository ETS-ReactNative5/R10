import AsyncStorage from '@react-native-community/async-storage';

export const createFave = async faveId => {
  try {
    const ret = await AsyncStorage.setItem(
      `${faveId}`,
      JSON.stringify({id: faveId, fave_on: new Date()}),
    );
    const stuff = await queryFaves();
    console.log(stuff);
    return ret;
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
    return allStores.filter(store => store[1].includes('fave_on')); // store[1] is checking index 1 fave_on
  } catch (e) {
    return false;
  }
};
