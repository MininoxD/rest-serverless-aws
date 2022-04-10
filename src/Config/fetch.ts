import axios from 'axios'
export const fetchData = () => {
	const BASE_URL = 'https://swapi.dev/api'
	const defaultOptions = {
		baseURL: BASE_URL,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		}
	}
	const instance = axios.create(defaultOptions)
	return instance
}