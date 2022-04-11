import axios, { AxiosError } from 'axios'
import { PeopleSpa } from '../People/Domain/People'
import { PeopleSwapi } from '../People/Domain/PeopleSwapi'
interface Persons{
    count: string
    results: PeopleSpa[]
}
describe('GET / - a People endpoint', () => {
	let URL_TEST = 'http://localhost:3000/dev'
	const IS_OFFLINE = true
	if (!IS_OFFLINE) {
		URL_TEST = 'Set your url Production'
	}
	
	it('Get Luke Skywalker',() => {
		const response = axios.get<PeopleSpa>(`${URL_TEST}/people/1`)
		response.then(response => {
			expect(response.data.nombre).toBe('Luke Skywalker')
			expect(response.status).toBe(200)
		})
	})

	it('Get All People',() => {
		const contain:Omit<PeopleSpa, '_id'> =
			{
				nombre: 'Luke Skywalker',
				altura: '172',
				peso: '77',
				color_pelo: 'blond',
				color_piel: 'fair',
				color_ojos: 'blue',
				anio_nacimiento: '19BBY',
				genero: 'male'
			}
		const response = axios.get<Persons>(`${URL_TEST}/people`)
		response.then(response => {
			expect(response.data.results).toContain(contain)
			expect(response.status).toBe(200)
		})
	})

	it('Get a People that does not exist', () => {		
		const response = axios.get<PeopleSwapi>(`${URL_TEST}/people/0`)
		response.catch((error:AxiosError)=> {
			expect(error.code).toBe(404)
			expect(error.response?.data.message).toBe('Not People Found')
		}) 
	})
})



