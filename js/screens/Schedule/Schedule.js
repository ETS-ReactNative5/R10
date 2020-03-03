import React from 'react';
import {View, Text, TouchableOpacity, ShadowPropTypesIOS} from 'react-native';

const Schedule = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Session Page</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Session')}>
        <Text>Go to Session</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Schedule;

//rnf
