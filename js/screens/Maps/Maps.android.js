import React, {Component} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from 'react-native-maps';

export default class Maps extends Component {
  render() {
    return (
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          zoomEnabled={true}
          style={styles.container}
          initialRegion={{
            latitude: 49.26335,
            longitude: -123.13703,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{latitude: 49.26341, longitude: -123.13818}}
            title="R10 - Red Academy"
            description="1490 West Broadway"
            image>
            <Image source={require('../../assets/images/map_pin.png')} />
          </Marker>
        </MapView>
      </View>
    );
  }
}
