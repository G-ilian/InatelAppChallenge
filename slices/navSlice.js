// Responderá por todas as operações feitas atraves do navReducer

import {createSlice} from "@reduxjs/toolkit";

// Inicializa os estados, basicamente mostrará no nosso contexto
// Onde está a pessoa que deseja contratar o serviço
const initialState={
    origin : null,
    destination:null,
    travelTimeInformation:null

}

// Responsável por fazer a navegação dentro do mapa
// Basicamente cria um reducer que setará a origem 
// E também selecionar os provedores que estão ali próximos
export const navSlice=createSlice({
    name:'nav',
    initialState,
    reducer:{
        setOrigin:(state,action) =>{
            state.origin=action.payload;
        },
        setDestination:(state,action)=>{
            state.destination=action.payload;
        },
        setTravelTimeInformation:(state,action)=>{
            state.travelTimeInformation=action.payload;
        }
    }

});

// Exportanto todas as informações para fora do arquivo

export const {setOrigin,setDestination,setTravelTimeInformation}
=navSlice.actions;

// Selectors 
export const selectOrigin=(state)=>state.nav.origin;
export const selectDestination=(state)=>state.nav.destination;
export const selectSetTravelTimeInformation=(state)=>state.nav.travelTimeInformation;

export default navSlice.reducer;