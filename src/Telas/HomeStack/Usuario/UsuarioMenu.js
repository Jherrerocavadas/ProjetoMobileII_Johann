import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { PMButton } from "../../../Components/PMButton";

function inserirUsuarioView(nav){
    nav.navigate('InserirUsuario')
}

function alterarUsuarioView(nav){
    nav.navigate('AlterarUsuario')
}

function buscarUsuarioView(nav) {
    nav.navigate('BuscarUsuario')
}

function excluirUsuarioView(nav) {
    nav.navigate('ExcluirUsuario')
}

function listarUsuarioView(nav) {
    nav.navigate('ListarUsuario')
}



export function UsuarioMenu({route}) {
    const navigation = useNavigation()

    return (
     <View style={ styles.container }>
        <Text style={ styles.title}>Usuário</Text>
        <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Inserir"} setter ={
        ()=>inserirUsuarioView(navigation)
        }/>
        <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Alterar"} setter ={
        ()=>alterarUsuarioView(navigation)
        }/>
        <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Buscar"} setter ={
        ()=>buscarUsuarioView(navigation)
        }/>
        <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Excluir"} setter ={
        ()=>excluirUsuarioView(navigation)
        }/>
        <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Listar"} setter ={
        ()=>listarUsuarioView(navigation)
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