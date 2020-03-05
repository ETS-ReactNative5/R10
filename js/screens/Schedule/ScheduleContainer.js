import React, {Component} from 'react';
import {Text, ActivityIndicator} from 'react-native';
import Schedule from './Schedule';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';
import {formatSessionData} from './Helper/FormatSessionData';

// SCHEDULE
const SCHEDULE = gql`
  query {
    allSessions {
      id
      location
      startTime
      title
      speaker {
        id
        bio
        image
        name
        url
      }
    }
  }
`;

export default class ScheduleContainer extends Component {
  render() {
    return (
      <Query query={SCHEDULE}>
        {({loading, error, data}) => {
          if (loading) {
            return <ActivityIndicator size="large" style={{height: '100%'}} />;
          }
          if (error) {
            return <Text>{`Error! ${error.message}`}</Text>;
          }
          console.log('ERROR:', error);
          return (
            <Schedule
              data={formatSessionData(data.allSessions)}
              navigation={this.props.navigation}
            />
          );
        }}
      </Query>
    );
  }
}
