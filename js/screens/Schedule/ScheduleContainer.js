import React, {Component} from 'react';
import {Text} from 'react-native';
import Schedule from './Schedule';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';
import {formatSessionData} from './Helper/FormatSessionData';
import FavesProvider, {FavesContext} from '../../context/FavesContext';
import Loader from '../../components/Loader';
import PropTypes from 'prop-types';

// SCHEDULE
const SCHEDULE = gql`
  query {
    allSessions {
      id
      location
      startTime
      description
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
      <FavesContext.Consumer>
        {({faveIds}) => (
          <Query query={SCHEDULE}>
            {({loading, error, data}) => {
              if (loading) {
                return <Loader />;
              }
              if (error) {
                console.log('ERROR:', error);
                return <Text>{`Error! ${error.message}`}</Text>;
              }

              return (
                <Schedule
                  data={formatSessionData(data.allSessions)}
                  navigation={this.props.navigation}
                  faveIds={faveIds}
                />
              );
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}

ScheduleContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
