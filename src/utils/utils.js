import axios from "axios"

const port = 3000 // Porta da API
export const api = axios.create({
    baseURL: `http://10.0.0.109:${port}` // endereço de hospedagem da API
})