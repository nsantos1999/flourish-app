// import { RESTORE_AUTH_TOKEN, AUTH } from '../constants/routes';
import axios from '../configs/axios';
import * as StorageService from './StorageService';
import usersMock from '../mock/usersMock';


export const login = async (email, password) => {
    try{

        console.log("Login Senha",email, password);
        const user = usersMock.find(user => {
            console.log(user.email, email);
            console.log(user.password, password);
            return user.email == email && user.password == password;
        })
        console.log(user);
        if(!user){
            throw "Error Login"
        }


        console.log("Logou !!!");

        // const {data} = await axios.post(AUTH, { email, senha });

        await StorageService.setUser(user);

        console.log("Gravou Async");

        return {
            id: user.id,
            nome: user.nome,
            email: user.email,
            saldo: user.saldo,
            level: user.level,
        }
    }catch(err) {
        console.log(err);
        throw err.response && err.response.data && err.response.data.message ? err.response.data.message : "Login ou senha invalidos";
    }
    
}

export const restoreUserByToken = async token => {
    // axios.defaults.headers.common['Authorization'] = token;
    
    const { data } = axios.post(RESTORE_AUTH_TOKEN, { token });

    return {
        nome: data.nome,
        email: data.email,
    }
}