import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const EDIT_QUESTION = 'EDIT_QUESTIONS';
export const CREATE_QUESTION = 'CREATE_QUESTION';

export function getQuestions(){
	const url = `${ROOT_URL}/questions`;
	const request = axios.get(url);
	return {
		type: GET_QUESTIONS,
		payload: request
	}
}

export function createQuestion(values, callback){
	const request = axios.post(`${ROOT_URL}/questions`, values)
		.then(() => callback());
	return {
		type: CREATE_QUESTION,
		payload: request
	}
}

export function editQuestion(values, callback){
	const request = axios.put(`${ROOT_URL}/questions/${values.id}`, values)
	.then(() => callback());
	return {
		type: EDIT_QUESTION,
		payload: request
	}
}