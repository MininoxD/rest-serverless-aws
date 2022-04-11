import { Request, Response } from 'express'
import clientDb from '../../db'
import { Translateobject } from '../../utils/translateObjects'
import { People, PeopleSpa } from '../Domain/People'

export const CreatePeople = async(req: Request, res: Response)=>{
	const PEOPLE_TABLE = process.env.PEOPLE_TABLE || ''
	const params:People =  req.body
	const translateObjects = Translateobject<People>(params, 'ENG')
	try {
		await clientDb.put({
			TableName: PEOPLE_TABLE,
			Item: {
				...translateObjects
			}
		},(err, data)=>{
			if(err) console.log(err)
			else console.log('Nuevo registro',data)
		})
		return res.status(201).json(params)
	} catch (error) {
		return res.status(400).json({ 
			message: 'Error creating people',
		})
	}
}