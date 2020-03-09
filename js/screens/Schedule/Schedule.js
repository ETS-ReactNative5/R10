import React from 'react';
import {View, Text, SectionList, TouchableHighlight} from 'react-native';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import styles from './styles';

const Schedule = props => {
  return (
    <View style={styles.overview}>
      <SectionList
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.time}>{moment(title).format('LT')}</Text>
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
                    props.navigation.navigate('Schedule', {});
                  } else {
                    props.navigation.navigate('Session', {
                      item: item,
                      id: item.speaker.id,
                    });
                  }
                }}>
                <View>
                  <View style={styles.border}>
                    <Text style={styles.title}>{item.title}</Text>

                    <View style={styles.position}>
                      <View>
                        <Text style={styles.location}>{item.location}</Text>
                      </View>

                      <View>
                        {props.faveIds.includes(item.id) ? (
                          <MaterialCommunityIcons
                            size={16}
                            name="heart"
                            color="#cf392a"
                          />
                        ) : null}
                      </View>
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

Schedule.propTypes = {
  data: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  faveIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Schedule;
