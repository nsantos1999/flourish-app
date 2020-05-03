import { LOGOUT, SET_USER_DATA } from './actionTypes';

import axios from '../../configs/axios';

const initialState = {
    id: null,
    email: '',
    nome: 'Natã Santos',
    saldo: 0
    // accessToken: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            const { email, nome, id, saldo, level  } = action.userData;
            // axios.defaults.headers.common = {'Authorization': `bearer ${accessToken}`};
            return {
                id,
                email,
                nome,
                saldo,
                level
                // accessToken: accessToken || state.accessToken
            }
        case LOGOUT: {
            return initialState
        }

        default: 
            return state;
    }
}

export default reducer;