const express = require('express')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || '8080'
const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  return res.status(200).send({})
})

app.post('/webhooks', (req, res) => {
  console.log(req.body)

  return res.status(200).send({})
})

app.listen(PORT, (error) => {
  if (error) {
    console.error(`Error: ${error.message}`)
  }

  console.log('Server running')
})
