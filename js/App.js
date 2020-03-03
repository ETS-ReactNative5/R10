import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AboutContainer from '../../R10/js/screens/About';
import {NavigationContainer} from '@react-navigation/native';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <AboutContainer />
      </NavigationContainer>
    );
  }
}
