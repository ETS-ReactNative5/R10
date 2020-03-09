import React from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import moment from 'moment';
import GradientButton from '../../components/GradientButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import styles from './styles';

const Session = ({
  data,
  navigation,
  faveIds,
  addFaveSession,
  removeFaveSession,
}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.location}>{data.location}</Text>

          {faveIds.includes(data.id) ? (
            <MaterialCommunityIcons size={18} name="heart" color="#cf392a" />
          ) : null}
        </View>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.startTime}>
          {moment(data.startTime).format('LT')}{' '}
        </Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.location}>Presented by:</Text>
        <View style={styles.border}>
          <Image style={styles.avatar} source={{uri: data.speaker.image}} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Speaker', {speaker: data.speaker});
            }}>
            <Text style={styles.speaker}>{data.speaker.name}</Text>
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

Session.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    speaker: PropTypes.object.isRequired,
  }).isRequired,

  navigation: PropTypes.object.isRequired,
  faveIds: PropTypes.array.isRequired,
  addFaveSession: PropTypes.func.isRequired,
  removeFaveSession: PropTypes.func.isRequired,
};

export default Session;
