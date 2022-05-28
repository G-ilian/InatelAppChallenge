import React from "react";
import{StyleSheet,Text,SafeAreaView,Image,View} from "react-native";
import {FlatList, TouchableOpacity } from "react-native-gesture-handler";
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements';

// Tela inicial da aplicação e suas navegações
const PlansOptions=()=>{

    return(
        <SafeAreaView>
            <Text style={tw`text-center py-5 text-xl`}>Planos Disponíveis</Text>
        </SafeAreaView>
    )

}

export default PlansOptions;

const styles=StyleSheet.create({
});

