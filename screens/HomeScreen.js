import React from "react";
import{StyleSheet,Text,SafeAreaView,Image,View} from "react-native";
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/NavOptions";



const HomeScreen=()=>{
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
            <NavOptions/>
            </View>
        
        </SafeAreaView>
        )

}

export default HomeScreen;

const styles=StyleSheet.create({

});