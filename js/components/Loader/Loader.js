import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';

const Loader = () => {
  return (
    <View>
      <ActivityIndicator size="large" color="#9963ea" style={styles.loader} />
    </View>
  );
};

export default Loader;
