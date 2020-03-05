import React, {Component} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {Image} from 'react-native';

export default class Maps extends Component {
  render() {
    return (
      <>
        <MapView
          zoomEnabled={true}
          style={{flex: 1}}
          initialRegion={{
            latitude: 49.26335,
            longitude: -123.13813,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{latitude: 49.26335, longitude: -123.13813}}
            title="R10 - Red Academy"
            description="1490 West Broadway"
            image>
            <Image source={require('../../assets/images/map_pin.png')} />
          </Marker>
        </MapView>
      </>
    );
  }
}
