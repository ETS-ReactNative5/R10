import React from 'react';
import {View, ScrollView, Text, FlatList, Image} from 'react-native';

const About = ({data}) => {
  return (
    <View>
      <ScrollView>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: '#999',
            height: 85,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../../assets/images/r10_logo.png')} />
        </View>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 16, padding: 5}}>
            R10 is a conference that focuses on just about any topic related to
            dev.
          </Text>
          <Text style={{fontSize: 21, fontWeight: '600', padding: 5}}>
            Date & Venue
          </Text>
          <Text style={{fontSize: 16, padding: 5}}>
            The R10 conference will take place on Monday, March 9, 2020 in
            Vancouver, BC
          </Text>
          <Text style={{fontSize: 21, fontWeight: '600', padding: 5}}>
            Code of Conduct
          </Text>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <Text
                  style={{
                    padding: 5,
                    fontSize: 16,
                    fontWeight: '400',
                  }}>
                  {item.title}
                </Text>
              );
            }}
          />
          <Text style={{fontSize: 16, borderTopWidth: 1}}>
            &copy; Ringo Wong 2020
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default About;
