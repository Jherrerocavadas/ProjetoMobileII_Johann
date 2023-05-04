import React, {useContext, useState } from "react";
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";


{/*---------- <Componentes personalizados> ----------*/}
import HeaderLogo from "../../Components/Header";
import { PMButton } from "../../Components/PMButton";
import { PMInputCadastro } from "../../Components/PMTextInput";
import { PMTextLink } from "../../Components/PMText";
import { api } from "../../utils/utils"



function usuarioView(nav){
    nav.navigate('Usuario');
}

function prestadorView(nav){
    nav.navigate('Prestador');
}

function fatecView(nav){
    nav.navigate('Fatec');
}

function prestadoresFatecsView(nav){
    nav.navigate('PrestadoresFatecs');
}


 export function Home({ route }) {
    const navigation = useNavigation()
     return (
      <View style={ styles.container }>
      <HeaderLogo/>
      <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Usuários"} setter ={
        ()=>usuarioView(navigation)
        }/>
      <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Prestadores"} setter ={
        ()=>prestadorView(navigation)
        }/>
      <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Fatecs"} setter ={
        ()=>fatecView(navigation)
        }/>
      <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Prestadores_Fatecs"} setter ={
        ()=>prestadoresFatecsView(navigation)
        }/>
    </View>
     );
   }











   
    
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal:20,
    },
    elements:{
        margin:5,
    }
  });
  