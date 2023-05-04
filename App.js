// import React from "react";
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


{/*---------- <Telas> ----------*/}
import { Login } from './src/Telas/AuthStack/Login'
import { Cadastro } from './src/Telas/AuthStack/Cadastro'
import { Home } from "./src/Telas/HomeStack/Home";
import { UsuarioMenu } from "./src/Telas/HomeStack/Usuario/UsuarioMenu";
import { PrestadorMenu } from "./src/Telas/HomeStack/Prestador/PrestadorMenu";
import { FatecMenu } from "./src/Telas/HomeStack/Fatec/FatecMenu";
import { PrestadoresFatecsMenu } from "./src/Telas/HomeStack/PrestadoresFatecs/PrestadoresFatecsMenu";
import { InserirUsuario } from './src/Telas/HomeStack/Usuario/InserirUsuario';
import { AlterarUsuario } from './src/Telas/HomeStack/Usuario/AlterarUsuario';
import { BuscarUsuario } from './src/Telas/HomeStack/Usuario/BuscarUsuario';
import { ExcluirUsuario } from './src/Telas/HomeStack/Usuario/ExcluirUsuario';
import { ListarUsuario } from './src/Telas/HomeStack/Usuario/ListarUsuario';


{/*---------- <Componentes personalizados> ----------*/}

const HomeStack = createNativeStackNavigator();

function AuthStackScreens() {
  return(
    <HomeStack.Navigator screenOptions={{ headerShown:false }}>
        <HomeStack.Screen name="Login" component ={Login}/>
        <HomeStack.Screen name="Cadastro" component ={Cadastro}/> 
        <HomeStack.Screen name='Home' component={HomeStackScreen} />
      </HomeStack.Navigator>
  )
}

function HomeStackScreen() {

  return (
    <HomeStack.Navigator screenOptions={{ headerShown:false }}>
      <HomeStack.Screen name='Inicial' component={Home} />
      <HomeStack.Screen name="Usuario" component ={UsuarioStackScreen}/>
      <HomeStack.Screen name="Prestador" component ={PrestadorMenu}/>
      <HomeStack.Screen name="Fatec" component ={FatecMenu}/>
      <HomeStack.Screen name="PrestadoresFatecs" component ={PrestadoresFatecsMenu}/>
    </HomeStack.Navigator>
  );
}

function UsuarioStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown:false }}>
      <HomeStack.Screen name="UsuarioView" component ={UsuarioMenu}/>
      <HomeStack.Screen name='InserirUsuario' component={InserirUsuario} />
      <HomeStack.Screen name="AlterarUsuario" component ={AlterarUsuario}/>
      <HomeStack.Screen name="BuscarUsuario" component ={BuscarUsuario}/>
      <HomeStack.Screen name="ExcluirUsuario" component ={ExcluirUsuario}/>
      <HomeStack.Screen name="ListarUsuario" component ={ListarUsuario}/>
    </HomeStack.Navigator>
  );
}


export default function App() {
  
  return (
    
    <NavigationContainer style={{backgroundColor:'black'}}>
      <AuthStackScreens></AuthStackScreens>
    </NavigationContainer>
  );
}

