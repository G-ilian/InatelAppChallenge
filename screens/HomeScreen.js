import React from "react";
import{StyleSheet,Text,SafeAreaView,Image,View} from "react-native";
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/NavOptions";
import { useDispatch } from "react-redux";
import { setDestination,setOrigin } from "../slices/navSlice";


const HomeScreen=()=>{
    const dispatch=useDispatch();

    return(
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image 
                    style={{
                        width:175,height:175,resizeMode:'contain'
                    }}
                    source={{
                        uri:'https://upload.wikimedia.org/wikipedia/commons/9/96/VIASAT_official.jpg',
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