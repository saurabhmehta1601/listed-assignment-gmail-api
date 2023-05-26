import express from 'express'
import morgan  from 'morgan'
import helmet  from 'helmet'
import dotenv from "dotenv"
import { PORT } from './src/constants/vars.js'
import authLoginRoute from './src/routes/auth/login'

dotenv.config() 

const app = express()
app.use(helmet())
app.use(morgan('dev'))

app.use('/auth/login', authLoginRoute)

app.listen(PORT, () => {
  console.log(" > Express server listening on port: " + PORT);
})