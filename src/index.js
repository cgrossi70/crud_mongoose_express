// TODO: Validacion de datos en general
// TODO Validacion del id en Update User y Remove user una falla produce la interrupcion del programa

import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import userRoutes from './routes/users.routes'
import bodyParser from 'body-parser'
import './database'

// Configuration
dotenv.config()
const port = process.env.PORT || 3000
const app = express()

// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())

// Routes
app.use('/users',userRoutes)

// Initialization 
app.listen(port)
console.log('Server listening on port ' + port)
