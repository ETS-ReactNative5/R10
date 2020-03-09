import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {sharedScreenOptions} from './config';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import MapScreen from '../screens/Maps';
import FavesScreen from '../screens/Faves';
import AboutScreen from '../screens/About';

const ScheduleStack = createStackNavigator();
const FavesStack = createStackNavigator();
const AboutStack = createStackNavigator();
const MapsStack = createStackNavigator();

const ScheduleStackScreen = () => {
  return (
    <ScheduleStack.Navigator
      screenOptions={sharedScreenOptions}
      initialRouteName="Schedule">
      <ScheduleStack.Screen name="Schedule" component={ScheduleScreen} />
      <ScheduleStack.Screen name="Session" component={SessionScreen} />
    </ScheduleStack.Navigator>
  );
};

const FavesStackScreen = () => {
  return (
    <FavesStack.Navigator
      screenOptions={sharedScreenOptions}
      initialRouteName="Faves">
      <FavesStack.Screen name="Faves" component={FavesScreen} />
      <FavesStack.Screen name="Session" component={SessionScreen} />
    </FavesStack.Navigator>
  );
};

const AboutStackScreen = () => {
  return (
    <AboutStack.Navigator
      screenOptions={sharedScreenOptions}
      initialRouteName="About">
      <AboutStack.Screen name="About" component={AboutScreen} />
    </AboutStack.Navigator>
  );
};

const MapsStackScreen = () => {
  return (
    <MapsStack.Navigator screenOptions={sharedScreenOptions}>
      <MapsStack.Screen name="Map" component={MapScreen} />
    </MapsStack.Navigator>
  );
};
const BottomTabNav = createBottomTabNavigator();

const BottomTabNavScreens = () => (
  <BottomTabNav.Navigator
    tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor: '#999999',
      labelStyle: {fontSize: 10, fontFamily: 'Montserrat'},
      style: {backgroundColor: 'black'},
    }}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Schedule') {
          iconName = focused ? 'calendar' : 'calendar-blank-outline';
        } else if (route.name === 'Maps') {
          iconName = focused ? 'map' : 'map-outline';
        } else if (route.name === 'Faves') {
          iconName = focused ? 'heart' : 'heart-outline';
        } else if (route.name === 'About') {
          iconName = focused ? 'information' : 'information-outline';
        }
        return (
          <MaterialCommunityIcons name={iconName} size={size} color={color} />
        );
      },
    })}>
    <BottomTabNav.Screen name="Schedule" component={ScheduleStackScreen} />
    <BottomTabNav.Screen name="Maps" component={MapsStackScreen} />
    <BottomTabNav.Screen name="Faves" component={FavesStackScreen} />
    <BottomTabNav.Screen name="About" component={AboutStackScreen} />
  </BottomTabNav.Navigator>
);

export default BottomTabNavScreens;
