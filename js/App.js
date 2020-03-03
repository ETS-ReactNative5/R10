import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ScheduleNav from './navigation';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <ScheduleNav />
      </NavigationContainer>
    );
  }
}
