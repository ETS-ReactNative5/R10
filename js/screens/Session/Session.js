import React from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import moment from 'moment';
import GradientButton from '../../components/GradientButton';

const Session = ({
  data,
  navigation,
  faveIds,
  addFaveSession,
  removeFaveSession,
}) => {
  return (
    <ScrollView>
      <View style={{padding: 10, justifyContent: 'space-around'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: 5,
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Speaker', {speaker: data.speaker});
          }}>
          <Text>{data.speaker.name}</Text>
        </TouchableOpacity>

        <GradientButton
          onPressed={() => {
            faveIds.includes(data.id)
              ? removeFaveSession(data.id)
              : addFaveSession(data.id);
          }}
          title={
            faveIds.includes(data.id) ? 'Remove from Faves' : 'Add to Faves'
          }
        />
      </View>
    </ScrollView>
  );
};

export default Session;
