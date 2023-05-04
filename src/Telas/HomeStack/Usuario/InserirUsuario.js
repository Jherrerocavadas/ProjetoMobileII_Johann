import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";


{/*---------- <Componentes personalizados> ----------*/}

import { PMInputCadastro } from "../../../Components/PMTextInput";
import { PMButton } from "../../../Components/PMButton";
import { inserirUsuario } from "../../../utils/Usuario/usuarioController";


export function InserirUsuario({ route }) {
    const navigation = useNavigation()
    const [usuarioCadastro, setUsuario] = useState("")
    const [senhaCadastro, setSenha] = useState("")
    const [statusCadastro, setStatus] = useState("")
    const [tipoCadastro, setTipo] = useState("")
    return (  
        <View style={ styles.container }>
            <Text style={ styles.title}>Usuário</Text>
            <PMInputCadastro
            setter={ setUsuario }
            valor={ usuarioCadastro }
            placeholderText="Usuário"
            tipoInput="default"
            />

            <PMInputCadastro
            setter={ setSenha }
            valor={ senhaCadastro }
            placeholderText="Senha"
            tipoInput="default"
            isTextoSeguro={ true }
            />

            <PMInputCadastro
            setter={ setStatus }
            valor={ statusCadastro }
            placeholderText="Status"
            tipoInput="default"
            />

            <PMInputCadastro
            setter={ setTipo }
            valor={ tipoCadastro }
            placeholderText="Tipo"
            tipoInput="default"
            />

            <PMButton BtnWidth={'80%'} BtnHeight={50} text ={"Inserir Usuário"} setter ={()=>{
                inserirUsuario(navigation, usuarioCadastro, senhaCadastro, statusCadastro, tipoCadastro)
            }
            
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
      paddingHorizontal:20
    },
    title:{
        fontSize:30,
    }
  });
  