import React, {Component} from 'react';
import {View, ScrollView, Text, FlatList, Image} from 'react-native';
import styles from './styles';

const About = props => {
  return (
    <View>
      <ScrollView>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: '#999',
            marginTop: 10,
          }}>
          <Image source={require('../../assets/images/r10_logo.png')} />
        </View>
        <Text>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text>Date & Venue</Text>
        <Text>
          The R10 conference will take place on Monday, March 9, 2020 in
          Vancouver, BC
        </Text>
        <Text>Code of Conduct</Text>

        <Text>&copy; Ringo Wong 2020</Text>
      </ScrollView>
    </View>
  );
};

export default About;
