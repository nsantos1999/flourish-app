import { LOGOUT, SET_USER_DATA } from './actionTypes';

import * as AuthService from '../../services/AuthService';
import * as StorageService from '../../services/StorageService';

export const logout = () => dispatch => {
    StorageService.removeUser();
    return dispatch({
        type: LOGOUT,
    })
}

export const login = (email, password) => async dispatch => {
    try{
        const userData = await AuthService.login(email, password);

        return dispatch({
            type: SET_USER_DATA,
            userData
        })
    }catch (err) {
        throw err
    }
}