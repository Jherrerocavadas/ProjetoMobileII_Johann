import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { PMButton } from "../../../Components/PMButton";
import { useState } from "react";
import { PMInputCadastro } from "../../../Components/PMTextInput";
import { alterarUsuario, buscarUsuario } from "../../../utils/Usuario/usuarioController";
import { ModalAlterarUsuario } from "../../../Components/Modais";


export function AlterarUsuario({route}) {
    const navigation = useNavigation()
    const [id, setId] = useState(null)
    const [login, setLogin] = useState("Login")
    const [senha, setSenha] = useState("senha")
    const [status, setStatus] = useState("status")
    const [tipo, setTipo] = useState("tipo")
    const [isLoading, setIsLoading] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [statusDeletado, setStatusDeletado] = useState(false);
       
    if(isLoading){
      return(
        <View style={ styles.container }>
           <ActivityIndicator size="large" color="#5000ff"/>
        </View>
      )
    }
  
    if(modalVisible){
      return (
        <ModalAlterarUsuario
        statusDeletado={statusDeletado}
        setStatusDeletado={setStatusDeletado}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        id={id}
        login={login}
        setLogin={setLogin}
        senha={senha}
        setSenha={setSenha}
        status={status}
        setStatus={setStatus}
        tipo={tipo}
        setTipo={setTipo}
        labelActionBtn="Alterar Usuário"
        action={() => {alterarUsuario({id, login, senha, status, tipo}).then((response)=>{
          console.log(response)
          setStatusDeletado(true)
          Alert.alert(response.title,
            response.text)
          navigation.navigate('UsuarioView')
        }
        )
        .catch((error)=>
          console.log(error)
        )}}>

        </ModalAlterarUsuario>
    );
  }

      else
      {
        return (
          <View style={styles.container}>     
        <Text style={ styles.title}>Insira o ID do usuário:</Text>


        <PMInputCadastro
            setter={ setId }
            valor={ id }
            placeholderText="ID"
            tipoInput="default"
          />

        <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Buscar"} setter ={
        ()=> {
          setIsLoading(true) // Para aparecer a tela de loading antes de concluir a busca do usuário
          buscarUsuario({id}).then((response)=>{
            //O Erro é tratado no .then pois a promise do app foi concluída mas o erro ocorreu no servidor
            if(response == 1054){
              Alert.alert("Erro!",
              "O ID digitado não é válido!",
              [{
                  text: 'Ok',
                  onPress: () =>{ 
                    setIsLoading(false)},
                  style: 'default',
                },])
            }
            else{
              setLogin(response[0].login) 
              setSenha(response[0].senha)
              setStatus(response[0].status)
              setTipo(response[0].tipo)
              setModalVisible(!modalVisible)
              setIsLoading(false)
            }
           
          })
          .catch(()=>{

            //Aqui o erro ocorre no lado do app, ao executar o setLogin.
            //No lado do servidor, a requisição é concluída e retorna um array vazio
            Alert.alert("Ops!",
            "O ID digitado não existe!",
            [{
                text: 'Ok',
                onPress: () =>{ 
                  setIsLoading(false)},
                style: 'default',
              },])
           })
          } 
        }/>
      </View>
    );}  
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
  },
  dados:{
    fontSize:20,
  },
  });