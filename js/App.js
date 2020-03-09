import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNav from './navigation';
import FavesProvider from './context/FavesContext';
import {StatusBar} from 'react-native';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './config/api';

export default class App extends Component {
  render() {
    StatusBar.setBarStyle('light-content', true);
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <NavigationContainer>
            <RootNav />
          </NavigationContainer>
        </FavesProvider>
      </ApolloProvider>
    );
  }
}
