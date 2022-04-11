import { Request, Response } from 'express'
import { fetchData } from '../../Config/fetch'
import { Error } from '../../Types/Error'
import { Translateobject } from '../../utils/translateObjects'
import { PeopleSwapi } from '../Domain/PeopleSwapi'
export const GetOnePeople = async (req: Request, res: Response) => {
	const id = req.params.id?.toString() || ''
	try {
		const response = fetchData().get <PeopleSwapi>(`/people/${id}`)
		const dataSwapi = (await response).data
		const responseApi = Translateobject<PeopleSwapi>(dataSwapi, 'SPA')
		return res.json(responseApi)
	} catch (error) {
		const errorResponse:Error = {
			message: 'Not People Found',
		}
		return res.status(404).json(errorResponse)
	}
}