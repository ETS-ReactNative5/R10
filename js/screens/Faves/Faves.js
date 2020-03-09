import React from 'react';
import {Text, TouchableOpacity, SectionList, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatSessionData} from '../Schedule/Helper/FormatSessionData';
import moment from 'moment';

const Faves = ({faveIds, navigation, sessions}) => {
  return (
    <View>
      {sessions && sessions.length ? (
        <SectionList
          renderSectionHeader={({section: {title}}) => (
            <Text
              style={{
                paddingTop: 5,
                paddingLeft: 10,
                backgroundColor: '#e6e6e6',
                fontWeight: '600',
                height: 25,
              }}>
              {moment(title).format('LT')}
            </Text>
          )}
          sections={formatSessionData(sessions)}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Session', {
                  item: item,
                });
              }}>
              <View
                style={{
                  padding: 10,
                  borderBottomWidth: 2,
                  borderBottomColor: '#e6e6e6',
                }}>
                <Text style={{fontSize: 16, fontWeight: '500'}}>
                  {item.title}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 8,
                  }}>
                  <View>
                    <Text style={{color: '#999', fontWeight: '500'}}>
                      {item.location}
                    </Text>
                  </View>
                  <View>
                    <MaterialCommunityIcons
                      size={16}
                      name="heart"
                      color="#cf392a"
                    />
                  </View>
                </View>
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
