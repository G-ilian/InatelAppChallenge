import React from "react";
import{StyleSheet,Text,SafeAreaView,Image,View} from "react-native";
import {FlatList, TouchableOpacity } from "react-native-gesture-handler";
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from "@react-navigation/native";

// Lista de dados com imagens e textos para as opções
const plans=[
    {
        id:"1",
        title:"Essencial",
        image:"https://upload.wikimedia.org/wikipedia/commons/4/45/Internet-icon.png",
        screen:"InstaladoresScreen",
        isp:'Provedor X',
        download:'200',
        upload_speed:'100',
        type_of_internet:'cabeada'

    },
    {
        id:"2",
        title:"Prático",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Yellow_Star_with_rounded_edges.svg/32px-Yellow_Star_with_rounded_edges.svg.png",
        screen:"InstaladoresScreen",
        isp:'Provedor X',
        download:'300',
        upload_speed:'150',
        type_of_internet:'cabeada'
    },
]

// Tela inicial da aplicação e suas navegações
const PlansOptions=()=>{
    const navigation=useNavigation();
    return(
        <SafeAreaView>

            <FlatList
                data={plans}
                keyExtractor={(item)=>item.id}
        
                renderItem={({item})=>(
                <TouchableOpacity 
                    onPress={()=>navigation.navigate(item.screen)}
                    style={tw `p-5 pl-5 pb-8 bg-gray-50 m-10 w-50`}>
                
                    <View>
                        <Image
                            style={{width:50,height:50,resizeMode:"contain"}}
                            source={{uri:item.image}}
                        />
                        <Text>Provedor: {item.isp}</Text>
                        <Text>Velocidade download: {item.download}</Text>
                        <Text>Velocidade upload: {item.upload_speed}</Text>
                        <Text>Tipo de internet {item.type_of_internet}</Text>
                    </View>
                    <Text style={tw `mt-2 text-lg font-semibold`}>Plano: {item.title}</Text>
                </TouchableOpacity>
                )}
    
                />
            </SafeAreaView>
    )

}

export default PlansOptions;

const styles=StyleSheet.create({
});

