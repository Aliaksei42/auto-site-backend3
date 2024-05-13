// server.js
require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const postRoutes = require('./routes/post-routes')
const PORT = process.env.PORT || 1000;
const URL = process.env.MONGODB_URL;

const app = express()
app.use(cors())
app.use(express.json())
app.use(postRoutes)

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`))

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listen port ${PORT}`)
})
