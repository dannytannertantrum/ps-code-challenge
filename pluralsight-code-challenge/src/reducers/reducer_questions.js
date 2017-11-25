import {GET_QUESTIONS} from '../actions/index';

export default function(state = [], action) {
	switch(action.type){
		case GET_QUESTIONS:
			return [action.payload.data, ...state];
		default:
			return state;
	}
	return state;
}