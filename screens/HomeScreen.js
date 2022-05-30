import React from "react";
import{StyleSheet,Text,SafeAreaView,Image,View} from "react-native";
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/NavOptions";
import { useDispatch } from "react-redux";
import { setDestination,setOrigin } from "../slices/navSlice";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {GOOGLE_MAPS_APIKEY} from "@env";

const HomeScreen=()=>{
    const dispatch=useDispatch();

    return(
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw `border-t border-gray-200 flex-shrink`}>
        </View>
            <View style={tw`p-5`}>
                <Image 
                    style={{
                        width:175,height:175,resizeMode:'contain'
                    }}
                    source={{
                        uri:'https://upload.wikimedia.org/wikipedia/commons/9/96/VIASAT_official.jpg',
                    }}
                />
                <View>
                    <GooglePlacesAutocomplete
                        placeholder="Onde você está ?"
                        styles={toInputBoxStyles}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        enablePoweredByContainer={false}
                        debounce={400}
                        returnKeyType={"search"}
                        minLength={2}
                        fetchDetails={true}
                        onPress={(data,details=null)=>{
                            dispatch(setOrigin({
                                location:details.geometry.location,
                                description:data.description,
                            }));
                            dispatch(setDestination(null));
                            
                        }}
                        query={{
                            key:GOOGLE_MAPS_APIKEY,
                            language:"pt-br"
                        }}

                    />
                </View>
                <NavOptions/>
            </View>
        
        </SafeAreaView>
        )

}

export default HomeScreen;

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        paddingTop:2,
        flex:0
    },
    textInput:{
        backgroundColor:"#DDDDDF",
        borderRadius:7,
        fontSize:18
    },
    textInputContainer:{
        paddingHorizontal:5,
        paddingBottom:2
    }
});