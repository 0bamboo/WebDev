import counterReducer from "./counter";
import loginReducer from "./isLogged";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
	counter: counterReducer,
	isLogged: loginReducer
});

export default allReducers;