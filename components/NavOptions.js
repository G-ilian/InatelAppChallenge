import React from "react";
import{Text,Image,View} from "react-native";
import {FlatList, TouchableOpacity } from "react-native-gesture-handler";
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";

// Lista de dados com imagens e textos para as opções
const data=[
    {
        id:"1",
        title:"Contrate nossos planos",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/FP_Satellite_icon.svg/1200px-FP_Satellite_icon.svg.png",
        screen:"MapScreen"
    }
]

// Tela inicial da aplicação e suas navegações
const NavOptions=()=>{
    const navigation=useNavigation();
    return(
        <FlatList
        
            data={data}
            keyExtractor={(item)=>item.id}
            horizontal
            renderItem={({item})=>(
                <TouchableOpacity 
                onPress={()=>navigation.navigate(item.screen)}
                style={tw `p-1 pl-3 pb-4 bg-gray-50 m-1 w-40`}>
                    
                    <View>
                        <Image
                            style={{width:50,height:50,resizeMode:"contain"}}
                            source={{uri:item.image}}
                        />
                    </View>
                    <Text style={tw `mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon 
                    style={tw `p-2 bg-white rounded-full  w-10 mt-2`}
                    name="arrowright" color="black" type="antdesign"/>
                </TouchableOpacity>
            )}
        
        />
    )

}

export default NavOptions;
