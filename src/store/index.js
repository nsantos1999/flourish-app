import { 
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
// import viagemReducer from './viagem/reducer';
// import dispositivoReducer from './dispositivo/reducer';
import authReducer from './auth/reducer';

const reducers = combineReducers({
    auth: authReducer
});

const storeConfig = () => createStore(reducers, compose(applyMiddleware(thunk)));

export default storeConfig;