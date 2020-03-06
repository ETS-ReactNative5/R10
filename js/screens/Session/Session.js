import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import moment from 'moment';

const Session = ({data}) => {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <Text>{data.location}</Text>
      </View>
      <Text>{data.title}</Text>
      <Text>{moment(data.startTime).format('LT')} </Text>
      <Text>{data.description}</Text>
      <Text>Presented by:</Text>
    </ScrollView>
  );
};

export default Session;
