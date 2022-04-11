import { Router } from 'express'
import { CheckParams } from '../Middlewares/checkParams'
import { CheckExistInDb } from '../People/Controllers/checkExistInDb'
import { CheckExistInSwapi } from '../People/Controllers/checkExistinSwapi'
import { CheckPeopleInDb } from '../People/Controllers/checkPeopleInDb'
import { CreatePeople } from '../People/Controllers/createPeople'
import { getAllPeople } from '../People/Controllers/getAllPeople'
import { GetOnePeople } from '../People/Controllers/getOnePeople'

const peopleRouter = Router()
peopleRouter.get('/:id', 
	CheckPeopleInDb,
	GetOnePeople)
peopleRouter.get('/',getAllPeople)
peopleRouter.post('',
	CheckParams({parameters: [
		'_id', 
		'nombre', 
		'anio_nacimiento', 
		'color_ojos',
		'genero', 
		'color_pelo', 
		'altura', 
		'peso', 
		'color_piel'
	]}),
	CheckExistInDb,
	CheckExistInSwapi,
	CreatePeople)
export default peopleRouter