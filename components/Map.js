import React from 'react';
import { StyleSheet,Text, View } from 'react-native';
import MapView,{marker} from 'react-native-maps';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectDestination, selectOrigin } from '../slices/navSlice';

const Map=()=>{
    const origin=useSelector(selectOrigin);
    return(
        <MapView
        style={tw `flex-1`}
        mapType="mutedStandard"
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      />
    )
}

export default Map;

const styles=StyleSheet.create({});

