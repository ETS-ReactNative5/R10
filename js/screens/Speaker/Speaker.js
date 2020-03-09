import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GradientButton from '../../components/GradientButton';
import PropTypes from 'prop-types';
import styles from './styles';

const Speaker = ({speaker, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <TouchableHighlight
          underlayColor={'transparent'}
          onPress={() => navigation.goBack()}>
          <View>
            <MaterialCommunityIcons
              name={Platform.select({
                ios: 'close',
                android: 'close',
              })}
              size={28}
              color={'white'}
              style={styles.close}
            />
            <Text style={styles.header}>About the Speaker</Text>
          </View>
        </TouchableHighlight>
      </View>
      <ScrollView style={styles.card}>
        <Image style={styles.image} source={{uri: speaker.image}} />
        <Text style={styles.name}>{speaker.name}</Text>
        <Text style={styles.bio}>{speaker.bio}</Text>

        <GradientButton
          onPressed={() => {
            Linking.openURL(`${speaker.url}`);
          }}
          title={'Read More on Wikipedia'}
        />
      </ScrollView>
    </View>
  );
};

Speaker.propTypes = {
  navigation: PropTypes.object.isRequired,
  speaker: PropTypes.object.isRequired,
};

export default Speaker;
