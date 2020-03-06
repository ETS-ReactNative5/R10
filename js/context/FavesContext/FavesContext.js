import React, {Component} from 'react';
import {queryFaves, deleteFave, createFave} from '../../config/models';

export const FavesContext = React.createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      faveIds: [],
    };
  }

  componentDidMount() {
    this.getFavedSessionsIds();
  }

  getFavedSessionsIds = async () => {
    try {
      const faves = await queryFaves();
      const ids = faves.map(f => f[0]);
      this.setState({faveIds: ids});
    } catch (e) {
      console.log(e);
    }
  };

  removeFaveSession = async sessionId => {
    try {
      await deleteFave(sessionId);
      this.getFavedSessionsIds();
    } catch (e) {
      console.log(e);
    }
  };

  addFaveSession = async sessionId => {
    try {
      const newFav = await createFave(sessionId);
      console.log(newFav);
      if (newFav) {
        this.setState({faveIds: [...this.state.faveIds, newFav.id]});
      }
      this.getFavedSessionsIds();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          removeFaveSession: this.removeFaveSession,
          addFaveSession: this.addFaveSession,
        }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export default FavesProvider;
