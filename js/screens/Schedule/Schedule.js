import React from 'react';
import {View, Text, SectionList, TouchableHighlight} from 'react-native';
import moment from 'moment';

// Move all in-line styling to styles.js and import it into schedule.js

const Schedule = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
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
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableHighlight
                key={item.id}
                underlayColor={'transparent'}
                onPress={() => {
                  if (!item.speaker) {
                    props.navigation.navigate('Maps', {});
                  } else {
                    props.navigation.navigate('Session', {
                      item: item,
                      id: item.speaker.id,
                    });
                  }
                }}>
                <View>
                  <View
                    style={{
                      padding: 10,
                      borderBottomWidth: 2,
                      borderBottomColor: '#e6e6e6',
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '500',
                      }}>
                      {item.title}
                    </Text>
                    <View
                      style={{
                        paddingTop: 8,
                        height: 30,
                      }}>
                      <Text
                        style={{
                          color: '#999999',
                          fontWeight: '500',
                          height: 30,
                        }}>
                        {item.location}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          );
        }}
        sections={props.data}
      />
    </View>
  );
};

export default Schedule;
