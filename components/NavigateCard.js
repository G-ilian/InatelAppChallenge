import React from "react";
import {StyleSheet, View,Text,Image} from "react-native";
import { FlatList,TouchableOpacity } from "react-native-gesture-handler";
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from "react-redux";
import { setOrigin } from "../slices/navSlice";

const NavigateCard =()=>{
    const navigation=useNavigation();
    const dispatch=useDispatch();
    return(
    <SafeAreaView style={tw `bg-white flex-1`}>
        <View style={tw `border-t border-gray-200 flex-shrink`}>
            <View>
                <GooglePlacesAutocomplete
                    placeholder="Onde você está ?"
                    styles={toInputBoxStyles}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    enablePoweredByContainer={false}
                    debounce={400}
                    returnKeyType={"search"}
                    minLength={2}
                    onPress={(data,details=null)=>{
                        dispatch(setOrigin({
                            location:details.geometry.location,
                            description:data.description,
                        })
                            
                        );
                        navigation.navigate('UsersOptions')
                    }}
                    query={{
                        key:GOOGLE_MAPS_APIKEY,
                        language:"pt-BR"
                    }}

                />
            </View>
        </View>
    </SafeAreaView>
    )
}

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        paddingTop:20,
        flex:0
    },
    textInput:{
        backgroundColor:"#DDDDDF",
        borderRadius:0,
        fontSize:18
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0
    }
});