import { Router } from 'express'
import { GetOnePeople } from '../People/Controllers/getOnePeople'

const peopleRouter = Router()
peopleRouter.get('/:id', GetOnePeople)
export default peopleRouter