import React from "react";
import{StyleSheet,Text,SafeAreaView,Image,View} from "react-native";
import {FlatList, TouchableOpacity } from "react-native-gesture-handler";
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements';

// Lista de dados com imagens e textos para as opções
const data=[
    {
        id:"1",
        title:"Contrate nossos planos",
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/FP_Satellite_icon.svg/1200px-FP_Satellite_icon.svg.png',
        screen:'MapScreen'
    }
]

// Tela inicial da aplicação e suas navegações
const NavOptions=()=>{
    return(
        <FlatList
        
            data={data}
            keyExtractor={(item)=>item.id}
            horizontal
            renderItem={({item})=>(
                <TouchableOpacity style={tw `p-2 pl-6 pb-4 bg-gray-200 m-2 w-40`}>

                    <View>
                        <Image
                            style={{width:100,height:100,resizeMode:"contain"}}
                            source={{uri:item.image}}
                        />
                    </View>
                    <Text style={tw `mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon 
                    style={tw `p-2 bg-white rounded-full - w-10 mt-4`}
                    name="arrowright" color="black" type="antdesign"/>
                </TouchableOpacity>
            )}
        
        />
    )

}

export default NavOptions;
