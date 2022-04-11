import { Request, Response } from 'express'
import { fetchData } from '../../Config/fetch'
import clientDb from '../../db'
import { Translateobject } from '../../utils/translateObjects'
import { PeopleSwapi } from '../Domain/PeopleSwapi'

interface PersonsSwapi{
    count: string
    results: PeopleSwapi[]
}
export const getAllPeople = async (req: Request, res: Response) => {
	const PEOPLE_TABLE = process.env.PEOPLE_TABLE || ''
	const persons :Array<{}>= []
	let count =0
	try {
		await clientDb.scan({
			TableName: PEOPLE_TABLE,
		}, (err, data)=>{
			if (err) {
				return res.status(404).json({
					message: 'Error getting people',
				})
			}
			if (data) {
				if(data.Items){
					data.Items.forEach(element => {
						const translatepeople= Translateobject(element, 'SPA')
						persons.push(translatepeople)
					})
					count = data.Count || 0
				}
			} 
		})

		const response = await fetchData().get<PersonsSwapi>('/people')
		const dataSwapi = (await response).data

		count = count + parseInt(dataSwapi.count)
		
		dataSwapi.results.forEach(element => {
			const translatepeople= Translateobject(element, 'SPA')
			persons.push(translatepeople)
		})

		return res.status(200).json({
			count,
			persons
		})
	} catch (error) {
		return res.status(404).json({
			message: 'Error query retry please',
		})
	}
}