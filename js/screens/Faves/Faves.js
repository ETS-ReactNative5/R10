import React from 'react';
import {Text, TouchableOpacity, SectionList, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatSessionData} from '../Schedule/Helper/FormatSessionData';

const Faves = ({faveIds, navigation, sessions}) => {
  return (
    <View>
      {sessions && sessions.length ? (
        <SectionList
          sections={formatSessionData(sessions)}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Session', {
                  session: item,
                });
              }}>
              <Text>{item.title}</Text>
              <Text>{item.location}</Text>
              <View>
                <MaterialCommunityIcons name="heart" color="#cf392a" />
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 16}}>
            You haven't faved any sessions yet.
          </Text>
        </View>
      )}
    </View>
  );
};
export default Faves;
