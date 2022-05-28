import React from "react";
import{StyleSheet,View,Text} from "react-native";
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import MapView from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import Map from "../components/Map";
import UserOptions from "../components/UsersOptions";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../components/NavigateCard";

// Tela inicial da aplicação e suas navegações
const MapScreen=()=>{
    const Stack=createStackNavigator();
    return(
        <View>
            <View style={tw `h-1/2`}>
                <Map/>
            </View>
            
            <View style={tw `h-1/2`}>

            <Stack.Navigator>

                <Stack.Screen
                    name="Navigate Card"
                    component={NavigateCard}
                    options={{
                        headerShown:false,
                    }}
                />
                
                <Stack.Screen
                    name="User Options"
                    component={UserOptions}
                    options={{
                        headerShown:false,
                    }}
                />
            </Stack.Navigator>
            </View>
        </View>
    );
};

export default MapScreen;

const styles=StyleSheet.create({});