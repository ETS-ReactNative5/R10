import React from 'react';
import {View, Text, SectionList, TouchableHighlight} from 'react-native';

const Schedule = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <SectionList
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
                  <View>
                    <Text> {item.title} </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text>{item.location}</Text>
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
