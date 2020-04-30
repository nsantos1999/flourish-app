import { LOGOUT, SET_USER_DATA } from './actionTypes';

import axios from '../../configs/axios';

const initialState = {
    email: '',
    nome: 'Natã Santos',
    accessToken: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            const { email, nome, accessToken } = action.userData;
            axios.defaults.headers.common = {'Authorization': `bearer ${accessToken}`};
            return {
                email,
                nome,
                accessToken: accessToken || state.accessToken
            }
        case LOGOUT: {
            return initialState
        }

        default: 
            return state;
    }
}

export default reducer;