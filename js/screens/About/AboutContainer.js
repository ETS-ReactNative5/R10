import React, {Component} from 'react';
import {Text, ActivityIndicator} from 'react-native';
import About from './About';
import {Query} from '@apollo/react-components';
import gql from 'apollo-boost';

export default class AboutContainer extends Component {
  render() {
    return (
      <Query
        query={gql`
          {
            allConducts {
              id
              title
              description
              order
            }
          }
        `}>
        {({loading, error, data}) => {
          if (loading)
            return <ActivityIndicator size="large" style={{height: '100%'}} />;
          if (error) return <Text>{`Error! ${error.message}`}</Text>;
          console.log('ERROR:', error);

          return <About data={data} />;
        }}
      </Query>
    );
  }
}
