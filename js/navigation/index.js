import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';

const ScheduleStack = createStackNavigator();

const ScheduleStackScreens = props => {
  return (
    <ScheduleStack.Navigator>
      <ScheduleStack.Screen name="Schedule" component={ScheduleScreen} />
      <ScheduleStack.Screen name="Session" component={SessionScreen} />
    </ScheduleStack.Navigator>
  );
};

export default ScheduleStackScreens;
