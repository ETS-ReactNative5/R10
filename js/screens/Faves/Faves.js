import React from 'react';
import {Text, TouchableOpacity, SectionList, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatSessionData} from '../Schedule/Helper/FormatSessionData';

const Faves = ({faveIds, navigation, sessions}) => {
  return (
    <View>
      <SectionList
        sections={formatSessionData(sessions)}
        renderItem={({item}) =>
          faveIds.includes(item.id, 0) ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Session', {
                  session: item,
                });
              }}>
              <View>
                <Text>{item.title}</Text>
                <Text>{item.location}</Text>
              </View>
              <Text>
                {faveIds.includes(item.id, 0) ? (
                  <MaterialCommunityIcons name="heart" color="#cf392a" />
                ) : null}
              </Text>
            </TouchableOpacity>
          ) : null
        }
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default Faves;
