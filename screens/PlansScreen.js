import React from "react";
import{StyleSheet,SafeAreaView} from "react-native";
import tw from 'tailwind-react-native-classnames';

import PlansOptions from "../components/PlansOptions";

const PlansScreen=()=>{


    return(
        <SafeAreaView style={tw`bg-white h-full`}>
            <PlansOptions />
        </SafeAreaView>
        )
}

export default PlansScreen;

const styles=StyleSheet.create({

});