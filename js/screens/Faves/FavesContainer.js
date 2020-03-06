import React, {Component} from 'react';
import Faves from './Faves';
import {Text, ActivityIndicator} from 'react-native';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';

import {FavesContext} from '../../context/FavesContext';

const QUERY_ALL = gql`
  {
    allSessions {
      id
      description
      location
      speaker {
        id
        bio
        image
        name
        url
      }
      startTime
      title
    }
  }
`;
class FavesContainer extends Component {
  render() {
    return (
      <FavesContext.Consumer>
        {({faveIds}) => (
          <Query query={QUERY_ALL}>
            {({loading, error, data}) => {
              if (loading)
                return (
                  <ActivityIndicator size="large" style={{height: '100%'}} />
                );
              if (error) return <Text>{error}</Text>;
              const favedSessions = data.allSessions.filter(session =>
                faveIds.includes(session.id),
              );
              return (
                <Faves
                  faveIds={faveIds}
                  sessions={favedSessions}
                  navigation={this.props.navigation}
                />
              );
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}
export default FavesContainer;
