import { Router } from 'express'
import peopleRouter from './People'

const mainRouter = Router()
/* people */
mainRouter.use('/people', peopleRouter)
export default mainRouter