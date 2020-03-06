import React, {Component} from 'react';
import Session from './Session';
import {FavesContext} from '../../context/FavesContext';

export default class SessionContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FavesContext.Consumer>
        {({addFaveSession, getFavedSessionIds, removeFaveSession, faveIds}) => (
          <Session
            data={this.props.route.params.item}
            getFavedSessionIds={getFavedSessionIds}
            addFaveSession={addFaveSession}
            removeFaveSession={removeFaveSession}
            faveIds={faveIds}
            navigation={this.props.navigation}
          />
        )}
      </FavesContext.Consumer>
    );
  }
}
