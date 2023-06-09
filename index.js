import express from 'express'
import morgan  from 'morgan'
import helmet  from 'helmet'
import dotenv from "dotenv"
import { PORT } from './src/constants/vars.js'
import getAuthUrlRoute from './src/routes/auth/get-auth-url.js'
import session from "express-session"
import callbackRoute from './src/routes/auth/callback.js'
import sendMailsRoute from './src/routes/email/sendMails.js'
dotenv.config({path: "./.env"}) 

const app = express()

app.use(
  session({
    secret: 'MY_SESSION_SECRET',
    resave: false,
    saveUninitialized: true,
  })
)
app.use(helmet())
app.use(morgan('dev'))

app.get('/email/send-mails', sendMailsRoute)
app.get('/auth/get-url', getAuthUrlRoute)
app.get('/auth/callback', callbackRoute)
app.get('/see-tokens', (req, res) => {
  return res.status(200).json({session: req.session})
})

app.listen(PORT, () => {
  console.log("> Express server listening on port: " + PORT);
})