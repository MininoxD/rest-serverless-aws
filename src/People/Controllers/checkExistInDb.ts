import { NextFunction, Request, Response } from 'express'
import clientDb from '../../db'
import { People } from '../Domain/People'

export const CheckExistInDb = async (req: Request, res: Response, next: NextFunction) => {
	const PEOPLE_TABLE = process.env.PEOPLE_TABLE || ''
	const params:People =  req.body
	try {
		clientDb.get({
			TableName: PEOPLE_TABLE,
			Key: {
				_id: params._id
			}
		}, (err, data)=>{
			if (err) {
				return res.status(404).json({
					message: 'Error getting people',
				})
			}
			if (data.Item) {
				return res.status(400).json({
					message: 'People already exist'
				})
			} else {
				return next()
			}
		})
	} catch (error) {
		return res.status(404).json({
			message: 'Error query retry please',
		})
	}
}