import axios, { AxiosError } from 'axios'
import { PeopleSpa } from '../People/Domain/People'
import { v4 } from 'uuid'
describe('POST / - a People endpoint', () => {
	let URL_TEST = 'http://localhost:3000/dev'
	const IS_OFFLINE = true
	if (!IS_OFFLINE) {
		URL_TEST = 'Set your url Production'
	}

	it('Create a new People', () => {
		const uuid = v4()
		const response = axios.post<PeopleSpa>(`${URL_TEST}/people`,
			{
				_id: uuid,
				nombre: 'Test User',
				anio_nacimiento: '2000',
				color_ojos: 'Brown',
				genero: 'Male',
				color_pelo: 'Brown',
				altura: '192',
				peso: '60',
				color_piel: 'Red'
			}
		)

		response.then(response => {
			expect(response.data._id).toBe(uuid)
			expect(response.data.nombre).toBe('Test User')
			expect(response.status).toBe(200)
		}) 
	})

	it('Create a new People that already exist', () => {
		const response  = axios.post<PeopleSpa>(`${URL_TEST}/people`,
			{
				_id: '1',
				nombre: 'Test User',
				anio_nacimiento: '2000',
				color_ojos: 'Brown',
				genero: 'Male',
				color_pelo: 'Brown',
				altura: '192',
				peso: '60',
				color_piel: 'Red'
			}
		)
		response.catch((error:AxiosError)=>{
			expect(error.code).toBe(400)
			expect(error.response?.data.message).toBe('People already exist')
		})
	})

	it('Create a new People missing parameters', () => {
		const response  = axios.post<PeopleSpa>(`${URL_TEST}/people`,
			{
				_id: '1',
				nombre: 'Test User'
			}
		)
		response.catch((error:AxiosError)=>{
			expect(error.code).toBe(400)
			expect(error.response?.data.message).toBe('missing parameters')
		})
	})
})