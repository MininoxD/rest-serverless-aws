import { Request, Response } from 'express'
import { fetchData } from '../../Config/fetch'
import { Error } from '../../Types/Error'
import { People } from '../Domain/People'
import { PeopleSwapi } from '../Domain/PeopleSwapi'
import clientDb from '../../db/index'
export const GetOnePeople = async (req: Request, res: Response) => {
	const id = req.params.id?.toString() || ''
	const PEOPLE_TABLE = process.env.PEOPLE_TABLE || ''
	try {
		const params = {
			TableName: PEOPLE_TABLE,
			Key: {
				_id: id
			}
		}
		await clientDb.get(params, (err, data)=>{
			if (err) {
				console.log('error',err)
			}
			if (data) {
				console.log('data',data)
			} else {

				console.log('otro error')
			}
		})

		const response = fetchData().get <PeopleSwapi>(`/people/${id}`)
		const dataSwapi = (await response).data
		const {
			homeworld,
			films,
			species,
			starships,
			vehicles,
			url,
			created,
			edited,
			...rest
		} = dataSwapi
		const responseApi:People = {...rest, _id:id}
		return res.json(responseApi)
	} catch (error) {
		const errorResponse:Error = {
			message: 'Not People Found',
		}
		return res.status(404).json(errorResponse)
	}
}