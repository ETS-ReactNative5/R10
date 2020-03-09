import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform,
  Animated,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

class ConductAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      rotate: new Animated.Value(0),
    };
  }

  rotate = () => {
    this.state.rotate.setValue(0);
    Animated.timing(this.state.rotate, {
      toValue: 1,
      duration: 250,
    }).start();
  };

  toggle = () => {
    LayoutAnimation.Presets.easeInEaseOut;
    this.setState({toggle: !this.state.toggle});
    this.rotate();
  };

  render() {
    const {data} = this.props;
    const Spin = this.state.rotate.interpolate({
      inputRange: ['0', '1'],
      outputRange: ['0deg', '-180deg'],
    });

    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            this.toggle();
          }}>
          {this.state.toggle ? (
            <View>
              <View style={styles.conductHeader}>
                <View>
                  <Animated.View style={{transform: [{rotate: Spin}]}}>
                    <Text style={styles.signs}>-</Text>
                  </Animated.View>
                </View>
                <Text style={styles.title}>{data.title}</Text>
              </View>

              <Text style={styles.description}>{data.description}</Text>
            </View>
          ) : (
            <View style={styles.row}>
              <View>
                <Animated.View style={{transform: [{rotate: Spin}]}}>
                  <Text style={styles.signs}>+</Text>
                </Animated.View>
              </View>
              <Text style={styles.title}>{data.title}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

ConductAnimation.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ConductAnimation;
