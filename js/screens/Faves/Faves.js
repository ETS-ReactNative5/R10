import React from 'react';
import {Text, TouchableOpacity, SectionList, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatSessionData} from '../Schedule/Helper/FormatSessionData';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './styles';

const Faves = ({navigation, sessions}) => {
  return (
    <View>
      {sessions && sessions.length ? (
        <SectionList
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.timeHeader}>{moment(title).format('LT')}</Text>
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
              <View style={styles.border}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.position}>
                  <View>
                    <Text style={styles.location}>{item.location}</Text>
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
        <View style={styles.placeholder}>
          <Text style={styles.text}>You haven't faved any sessions yet.</Text>
        </View>
      )}
    </View>
  );
};

Faves.propTypes = {
  navigation: PropTypes.object.isRequired,
  sessions: PropTypes.array.isRequired,
};
export default Faves;
