import React from 'react';
import {View, Text, TouchableOpacity, ShadowPropTypesIOS} from 'react-native';

const Schedule = props => {
  return (
    <View>
      <Text>Session Page</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Session')}>
        <Text>Go to Session</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Schedule;

//rnf
