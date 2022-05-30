import React from "react";
import {StyleSheet, View,Text,Image,SafeAreaView} from "react-native";
import { FlatList,TouchableOpacity } from "react-native-gesture-handler";
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";


// Lista de dados com imagens e textos para as opções
const instaladores=[
    {
        id:"1",
        title:"Essencial",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/FP_Satellite_icon.svg/1200px-FP_Satellite_icon.svg.png",
        screen:"InstaladoresScreen",
        nome:'Gabriel Fonseca',
        Rating:'7/10',
        price_km:'0.80',
        distance:'10'

    },
    {
        id:"2",
        title:"Prático",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/FP_Satellite_icon.svg/1200px-FP_Satellite_icon.svg.png",
        screen:"InstaladoresScreen",
        nome:'Luís Emanuel',
        Rating:'10/10',
        price_km:'1.0',
        distance:'20'
    }
]

const InstaladoresOptions=()=>{
    const navigation=useNavigation();
    return(
        <SafeAreaView>

            <FlatList
                data={instaladores}
                keyExtractor={(item)=>item.id}
        
                renderItem={({item})=>(
                <TouchableOpacity 
                    onPress={()=>navigation.navigate(item.screen)}
                    style={tw `p-5 pl-2 pb-8 bg-blue-50 m-10 w-45`}>
                    <Text style={tw `mt-2 font-semibold`}>Nome: {item.nome}</Text>
                    <Text style={tw `mt-2 font-semibold`}>Rating: {item.Rating}</Text>
                    <Text style={tw `mt-2 font-semibold`}>Preço por km: {item.price_km} </Text>
                    <Text style={tw `mt-2 font-semibold`}>Distância: {item.distance} </Text>
                    <Text style={tw `mt-2 font-semibold`}>Plano coberto: {item.title}</Text>
                </TouchableOpacity>
                )}/>
            </SafeAreaView>
    )

}
export default InstaladoresOptions;

const styles = StyleSheet.create({});