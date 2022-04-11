import { NextFunction, Request, Response } from 'express'
import { fetchData } from '../../Config/fetch'
import { People } from '../Domain/People'
import { PeopleSwapi } from '../Domain/PeopleSwapi'
export const CheckExistInSwapi = async (req: Request, res: Response, next: NextFunction) => {
	const params:People =  req.body
	try {
		const response = fetchData().get <PeopleSwapi>(`/people/${params._id}`)
		const dataSwapi = (await response).data
		return res.status(400).json({
			message: 'People already exist'
		})
	} catch (error) {
		return next()
	}
}