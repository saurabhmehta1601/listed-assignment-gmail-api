import express from 'express'
import morgan  from 'morgan'
import helmet  from 'helmet'
import dotenv from "dotenv"
import { PORT } from './src/constants/vars.js'
import getAuthUrlRoute from './src/routes/auth/get-auth-url.js'
import session from "express-session"
app.use(
  session({
    secret: 'MY_SESSION_SECRET',
    resave: false,
    saveUninitialized: true,
  })
)
dotenv.config() 

const app = express()
app.use(helmet())
app.use(morgan('dev'))

app.use('/auth/get-url', getAuthUrlRoute)

app.listen(PORT, () => {
  console.log(" > Express server listening on port: " + PORT);
})