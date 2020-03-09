import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import ConductAnimation from '../../components/ConductAnimation';
import PropTypes from 'prop-types';
import styles from './styles';

const About = ({data}) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.logo}>
          <Image source={require('../../assets/images/r10_logo.png')} />
        </View>
        <View style={styles.border}>
          <Text style={styles.text}>
            R10 is a conference that focuses on just about any topic related to
            dev.
          </Text>
          <Text style={styles.subheader}>Date & Venue</Text>
          <Text style={styles.text}>
            The R10 conference will take place on Monday, March 9, 2020 in
            Vancouver, BC
          </Text>
          <Text style={styles.subheader}>Code of Conduct</Text>
          {data.map(codeOfConduct => {
            return (
              <View key={codeOfConduct.id} style={styles.text}>
                <ConductAnimation data={codeOfConduct} />
              </View>
            );
          })}
        </View>
      </ScrollView>
      <Text style={styles.copyright}>&copy; Ringo Wong 2020</Text>
    </View>
  );
};

About.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default About;
