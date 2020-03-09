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
              <View style={{flexDirection: 'row', color: '#9963ea'}}>
                <View>
                  <Animated.View style={{transform: [{rotate: Spin}]}}>
                    <Text
                      style={{
                        color: '#9963ea',
                        fontWeight: '500',
                        fontSize: 16,
                      }}>
                      -
                    </Text>
                  </Animated.View>
                </View>
                <Text
                  style={{
                    color: '#9963ea',
                    fontWeight: '500',
                    fontSize: 16,
                    paddingLeft: 10,
                  }}>
                  {data.title}
                </Text>
              </View>

              <Text style={{fontSize: 16, marginTop: 15, marginBottom: 15}}>
                {data.description}
              </Text>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <View>
                <Animated.View style={{transform: [{rotate: Spin}]}}>
                  <Text
                    style={{color: '#9963ea', fontWeight: '500', fontSize: 16}}>
                    +
                  </Text>
                </Animated.View>
              </View>
              <Text
                style={{
                  color: '#9963ea',
                  fontWeight: '500',
                  fontSize: 16,
                  paddingLeft: 10,
                }}>
                {data.title}
              </Text>
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
