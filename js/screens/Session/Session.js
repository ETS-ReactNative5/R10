import React from 'react';
import {View, ScrollView, Text, Image, Button} from 'react-native';
import moment from 'moment';

const Session = ({data}) => {
  console.log(data);
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
      <Image
        style={{width: 60, height: 60}}
        source={{uri: data.speaker.image}}
      />
      <Text> {data.speaker.name}</Text>
      <Button
        title="Add to Faves"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </ScrollView>
  );
};

export default Session;
