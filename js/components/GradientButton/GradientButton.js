import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import styles from './styles';

const GradientButton = ({onPressed, title}) => (
  <TouchableOpacity
    style={styles.button}
    activeOpacity={0.6}
    onPress={onPressed}>
    <LinearGradient
      style={styles.bar}
      colors={['#8797D6', '#9963ea']}
      start={{x: 1.0, y: 1.0}}
      end={{x: 0.0, y: 0.0}}>
      <Text style={styles.title}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

GradientButton.propTypes = {
  onPressed: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default GradientButton;
