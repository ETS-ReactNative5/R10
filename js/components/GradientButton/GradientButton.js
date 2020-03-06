import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientButton = ({onPressed, title}) => (
  <TouchableOpacity activeOpacity={0.6} onPress={onPressed}>
    <LinearGradient
      colors={['#8797D6', '#9963ea']}
      start={{x: 1.0, y: 1.0}}
      end={{x: 0.0, y: 0.0}}>
      <Text>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

export default GradientButton;
