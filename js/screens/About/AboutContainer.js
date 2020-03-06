import React, {Component} from 'react';
import {Text, ActivityIndicator} from 'react-native';
import About from './About';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';

const queryAbout = gql`
  query {
    allConducts {
      id
      title
      description
      order
    }
  }
`;

export default class AboutContainer extends Component {
  render() {
    return (
      <Query query={queryAbout}>
        {({loading, error, data}) => {
          if (loading) {
            return <ActivityIndicator size="large" style={{height: '100%'}} />;
          }
          if (error) {
            console.log('ERROR:', error);
            return <Text>{`Error! ${error.message}`}</Text>;
          }
          return <About data={data.allConducts} />;
        }}
      </Query>
    );
  }
}
