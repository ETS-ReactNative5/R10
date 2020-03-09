import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

const GradientButton = ({onPressed, title}) => (
  <TouchableOpacity
    style={{width: 200, alignSelf: 'center', paddingTop: 20}}
    activeOpacity={0.6}
    onPress={onPressed}>
    <LinearGradient
      style={{height: 40, justifyContent: 'center', borderRadius: 50}}
      colors={['#8797D6', '#9963ea']}
      start={{x: 1.0, y: 1.0}}
      end={{x: 0.0, y: 0.0}}>
      <Text
        style={{
          color: 'white',
          alignSelf: 'center',
          fontWeight: '500',
          fontSize: 16,
        }}>
        {title}
      </Text>
    </LinearGradient>
  </TouchableOpacity>
);

GradientButton.propTypes = {
  onPressed: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default GradientButton;
