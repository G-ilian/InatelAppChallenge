// Responderá por todas as operações feitas atraves do navReducer

import {createSlice} from "@reduxjs/toolkit";

// Inicializa os estados, basicamente mostrará no nosso contexto
// Onde está a pessoa que deseja contratar o serviço
const inicializaEstado={
    origin : null,
    selectProviders:null,

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
        setProvider:(state,action)=>{
            state.selectProviders=action.payload;
        }
    }

});

// Exportanto todas as informações para fora do arquivo

export const {setOrigin,setProvider}
=navSlice.actions;

// Selectors 
export const selectOrigin=(state)=>state.nav.origin;
export const selectProvider=(state)=>state.nav.selectProvider;

export default navSlice.reducer;