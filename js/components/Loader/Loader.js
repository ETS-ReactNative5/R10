import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const Loader = props => {
  return (
    <View>
      <ActivityIndicator
        size="large"
        color="#9963ea"
        style={{height: '100%'}}
      />
    </View>
  );
};

export default Loader;
