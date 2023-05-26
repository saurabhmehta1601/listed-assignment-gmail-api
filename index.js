const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
require('dotenv').config()

const app = express()
app.use(helmet())
app.use(morgan('dev'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(" > Express server listening on port: " + PORT);
})