import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Schedule from './Schedule';

export default class ScheduleContainer extends Component {
  render() {
    return <Schedule navigation={this.props.navigation} />;
  }
}
