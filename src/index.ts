import express from 'express'
import serverless from 'serverless-http'
import {json} from 'body-parser'
import mainRouter from './Router'
const app = express()
app.use(json({strict: false}))
app.use(mainRouter)
module.exports.handler = serverless(app)

