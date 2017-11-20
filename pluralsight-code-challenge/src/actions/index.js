import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/questions';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const EDIT_QUESTIONS = 'EDIT_QUESTIONS';
export const CREATE_QUESTION = 'CREATE_QUESTION';

export function getQuestions(){
	const url = ROOT_URL;
	const request = axios.get(url);
	return {
		type: GET_QUESTIONS,
		payload: request
	}
}