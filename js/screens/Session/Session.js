import React from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import moment from 'moment';
import GradientButton from '../../components/GradientButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Session = ({
  data,
  navigation,
  faveIds,
  addFaveSession,
  removeFaveSession,
}) => {
  return (
    <ScrollView>
      <View style={{padding: 18, justifyContent: 'space-around'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,
              paddingBottom: 10,
              color: '#999',
            }}>
            {data.location}
          </Text>

          {faveIds.includes(data.id) ? (
            <MaterialCommunityIcons size={18} name="heart" color="#cf392a" />
          ) : null}
        </View>
        <Text style={{fontSize: 28, fontWeight: '500', paddingBottom: 10}}>
          {data.title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: '#cf392a',
            paddingBottom: 10,
          }}>
          {moment(data.startTime).format('LT')}{' '}
        </Text>
        <Text style={{fontSize: 16, paddingBottom: 20}}>
          {data.description}
        </Text>
        <Text
          style={{
            color: '#999',
            fontWeight: '500',
            fontSize: 16,
            paddingBottom: 10,
          }}>
          Presented by:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 2,
            borderColor: '#e6e6e6',
          }}>
          <Image
            style={{width: 55, height: 55, borderRadius: 50}}
            source={{uri: data.speaker.image}}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Speaker', {speaker: data.speaker});
            }}>
            <Text
              style={{
                paddingLeft: 15,
                paddingTop: 16,
                fontWeight: '500',
                fontSize: 16,
              }}>
              {data.speaker.name}
            </Text>
          </TouchableOpacity>
        </View>

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
