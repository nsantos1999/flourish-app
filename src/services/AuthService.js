// import { RESTORE_AUTH_TOKEN, AUTH } from '../constants/routes';
import axios from '../configs/axios';
import * as StorageService from './StorageService';
import usersMock from '../mock/usersMock';


export const login = async (email, password) => {
    try{
        const user = usersMock.find(user => user.email == email && user.password == password)
        if(!user){
            throw "Error Login"
        }


        // const {data} = await axios.post(AUTH, { email, senha });

        // await StorageService.setUser(data);

        return {
            nome: user.nome,
            email: user.email
        }
    }catch(err) {
        throw err.response && err.response.data && err.response.data.message ? err.response.data.message : "Login ou senha invalidos";
    }
    
}

export const restoreUserByToken = async token => {
    axios.defaults.headers.common['Authorization'] = token;
    
    const { data } = axios.post(RESTORE_AUTH_TOKEN, { token });

    return {
        nome: data.nome,
        email: data.email,
    }
}