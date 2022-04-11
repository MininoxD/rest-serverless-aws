import { NextFunction, Request, Response } from 'express'
import clientDb from '../../db'
import { Translateobject } from '../../utils/translateObjects'
export const CheckPeopleInDb = async (req: Request, res: Response, next: NextFunction) => {
	const id = req.params.id?.toString() || ''
	const PEOPLE_TABLE = process.env.PEOPLE_TABLE || ''
	try {
		clientDb.get({
			TableName: PEOPLE_TABLE,
			Key: {
				_id: id
			}
		}, (err, data)=>{
			if (err) {
				return res.status(404).json({
					message: 'Error getting people',
				})
			}
			if (data.Item) {
				const translatepeople = Translateobject(data.Item, 'SPA')
				return res.json(translatepeople)  
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