// import { RESTORE_AUTH_TOKEN, AUTH } from '../constants/routes';
import axios from '../configs/axios';
import * as StorageService from './StorageService';

export const login = async (email, senha) => {
    try{
        // const {data} = await axios.post(AUTH, { email, senha });

        // await StorageService.setUser(data);

        // return {
        //     nome: data.nome,
        //     email: data.email,
        //     accessToken: data.accessToken
        // }
        return null;
    }catch(err) {
        throw err.response && err.response.data && err.response.data.message ? err.response.data.message :  err.message;
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