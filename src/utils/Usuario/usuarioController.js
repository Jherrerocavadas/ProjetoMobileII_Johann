import { api } from "../utils";
import { Alert } from 'react-native';


export async function inserirUsuario(navigation, login, senha, status, tipo){
    await api.get(`/usuariosLogin?login=${login}&senha=${senha}` )
    .then((response)=>
            {
                if(response.data[0]){ // Array tem o objeto de usuário na primeira posição, logo ele já existe
                Alert.alert(
                    "Erro!",
                    "Usuário já existente!"
                );
                }
                else{ // Array vazio, indicando que o usuário não existe
                api.post(`/usuarios` , {
                    login: login,
                    senha: senha,
                    status: status,
                    tipo: tipo
                
                }).then((response)=>{// Enviar dados do usuário
                    Alert.alert(
                    "Sucesso!",
                    "Cadastro de usuário concluído!"
                    )
                    navigation.navigate('UsuarioView');
                }).catch((error) => 
                {
                    console.warn("ERRO!")
                    console.error(error)
                })  
                }     
            })
            .catch((error)=>{
                console.log(error)
            })

}

export async function alterarUsuario({id, login, senha, status, tipo}){
    
    // console.log(`id: ${id}`)
    // console.log(`login: ${login}`)
    // console.log(`senha: ${senha}`)
    // console.log(`status: ${status}`)
    // console.log(`tipo: ${tipo}`)
    return api.put(`/usuarios/${parseInt(id)}`,{
        login: login,
        senha: senha,
        status: status,
        tipo: tipo
    
    }).then(async (response)=>{// Enviar dados do usuário
            // console.log(request.body)
            // console.log(response.data)
            return {title:"Sucesso!",
            text:"Cadastro de usuário atualizado!"}
            
            
        }).catch((error) => 
        {    
            console.warn("ERRO!")
            console.error(error)
            return {title: "Ops!",
                text:"Algo deu errado."}
        }) 
}

export async function buscarUsuario({id}) {
    return api.get(`/usuarios/${parseInt(id)}` )
    .then(async (response)=>
            { 
                if(response.data.erro){
                    //Retornar o código de erro
                    return response.data.erro.errno
                }
                //console.log(response.data)
                //Retornar os dados de busca
                return response.data
                     
            })
            .catch(async (error)=>
            {   
                
                console.warn("ERRO!")
                console.warn(`error: ${error.code}`)
                
               
            })
}

export async function excluirUsuario({id}) {
        return api.delete(`/usuarios/${parseInt(id)}`)
        .then(async (response)=>{// Enviar dados do usuário
            return {title:"Sucesso!",
            text:"Cadastro de usuário excluído!"}
            
            
        }).catch((error) => 
        {    
            console.warn("ERRO!")
            console.error(error)
            return {title: "Ops!",
                text:"Algo deu errado."}
        }) 
  
}


export async function listarUsuario() {
    return api.get('/usuarios')
    .then(async (response)=>
            {
               return response.data     
            })
            .catch((error)=>{
                console.log(error)
            })

    
}
