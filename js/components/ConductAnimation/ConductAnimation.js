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
    };
  }

  toggle = () => {
    LayoutAnimation.Presets.easeInEaseOut;
    this.setState({toggle: !this.state.toggle});
  };

  render() {
    const {data} = this.props;

    return (
      <View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            this.toggle();
          }}>
          {this.state.toggle ? (
            <View>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Animated.View>
                    <Text>-</Text>
                  </Animated.View>
                </View>
                <Text>{data.title}</Text>
              </View>

              <Text>{data.description}</Text>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <View>
                <Animated.View>
                  <Text>+</Text>
                </Animated.View>
              </View>
              <Text>{data.title}</Text>
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
