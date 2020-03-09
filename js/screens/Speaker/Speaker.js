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

const Speaker = ({speaker, navigation}) => {
  return (
    <View style={{backgroundColor: '#000', flex: 1}}>
      <View
        style={{
          paddingHorizontal: 10,
          marginTop: 40,
          marginBottom: 50,
          color: '#ffffff',
        }}>
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
              style={{justifyContent: 'flex-start'}}
            />
            <Text
              style={{
                alignSelf: 'center',
                color: '#fff',
                fontSize: 16,
                fontWeight: '500',
              }}>
              About the Speaker
            </Text>
          </View>
        </TouchableHighlight>
      </View>
      <ScrollView
        style={{
          backgroundColor: '#ffffff',
          height: '100%',
          margin: 10,
          borderRadius: 6,
          marginBottom: 0,
        }}>
        <Image
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            alignSelf: 'center',
            margin: 20,
          }}
          source={{uri: speaker.image}}
        />
        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            alignSelf: 'center',
            paddingBottom: 10,
          }}>
          {speaker.name}
        </Text>
        <Text style={{margin: 20, fontSize: 16}}>{speaker.bio}</Text>

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
