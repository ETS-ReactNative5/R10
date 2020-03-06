import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
  Modal,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GradientButton from '../../components/GradientButton';

const Speaker = ({speaker, navigation}) => {
  return (
    <View>
      <Modal>
        <TouchableHighlight
          underlayColor={'transparent'}
          onPress={() => navigation.goBack()}>
          <View>
            <MaterialCommunityIcons
              name={Platform.select({
                ios: 'close',
                android: 'close',
              })}
              size={30}
              color={'white'}
              style={{justifyContent: 'flex-start'}}
            />
            <Text>About the Speaker</Text>
          </View>
        </TouchableHighlight>

        <ScrollView>
          <Image
            style={{height: 60, width: 60}}
            source={{uri: speaker.image}}
          />
          <Text>{speaker.name}</Text>
          <Text>{speaker.bio}</Text>

          <GradientButton
            onPressed={() => {
              Linking.openURL(`${speaker.url}`);
            }}
            title={'Read More on Wikipedia'}
          />
        </ScrollView>
      </Modal>
    </View>
  );
};

export default Speaker;
