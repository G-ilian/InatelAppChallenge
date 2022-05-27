import React from "react";
import{StyleSheet,Text,SafeAreaView,Image,View} from "react-native";
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from "react-redux";
import { setDestination,setOrigin } from "../slices/navSlice";


const HomeScreen=()=>{
    const dispatch=useDispatch();

    return(
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image 
                    style={{
                        width:200,height:200,resizeMode:'contain'
                    }}
                    source={{
                        uri:'https://upload.wikimedia.org/wikipedia/commons/9/96/VIASAT_official.jpg',
                    }}/>

            <GooglePlacesAutocomplete
                placeholder="Onde você está? "
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                style={{
                    container:{
                        flex:0,

                    },
                    textInput:{
                        fontSize:20,
                    },
                }}
                enablePoweredByContainer={false}
                minLength={2}
                onPress={(data,details=null)=>{
                    dispacth(setOrigin({
                        location:details.geometry.location,
                        descripition:data.description,
                    }))
                    dispatch(setDestination(null))

                }}
                fetchDetails={true}
                returnKeyType={"search"}
                query={{
                    key:GOOGLE_MAPS_APIKEY,
                    language: 'en'
                }}

            
            />
            <NavOptions/>
            </View>
        
        </SafeAreaView>
        )

}

export default HomeScreen;

const styles=StyleSheet.create({

});