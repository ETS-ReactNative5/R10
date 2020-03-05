import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreens from './Navigation';
import SpeakerModal from '../screens/Speaker';

const RootStack = createStackNavigator();

const RootStackScreens = props => (
  <RootStack.Navigator mode="modal" headerMode="none">
    <RootStack.Screen name="Main" component={MainScreens} />
    <RootStack.Screen name="Speaker" component={SpeakerModal} />
  </RootStack.Navigator>
);

export default RootStackScreens;
