import React from "react";
import {StyleSheet, View,Text,Image} from "react-native";
import { FlatList,TouchableOpacity } from "react-native-gesture-handler";
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";


// Lista de dados com imagens e textos para as opções
const data=[
    {
        id:"1",
        title:"Planos",
        icon:'book-outline',
        screen:"PlansScreen"
    },
    {
        id:"2",
        title:"Instalações",
        icon:"today",
        screen:"MapScreen"
    }
]


const UserOptions =()=>{
    const navigation=useNavigation();
    
    return(
        <FlatList
            data={data}
            keyExtractor={(item)=>item.id}
            ItemSeparatorComponent={()=><View style={tw`bg-gray-200,{height:0.5}`}/>}
            renderItem={({item:{icon,title,screen}})=>(
                <TouchableOpacity 
                onPress={()=>navigation.navigate(screen)}
                style={tw `flex-row items-center p-5`}>
                    <Icon 
                    style={tw `mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type="ionicon"
                    color="white"
                    size={18}
                    />
                    <Text style={tw `mt-2 text-lg font-semibold`}>{title}</Text>
                    
                </TouchableOpacity>
                
            )}
            
        />
        
        
    )
}

export default UserOptions;

const styles = StyleSheet.create({});