const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const cors = require('cors')
const port = 4000

const data = [
  {
    "id": 1,
    "name": "Account 1",
    "createdOn": "05-08-21",
    "owner": "User 1"
  },
  {
    "id": 2,
    "name": "Account 2",
    "createdOn": "05-08-21",
    "owner": "User 2"
  },
  {
    "id": 3,
    "name": "Account 3",
    "createdOn": "05-08-21",
    "owner": "User 3"
  }
]

app.use(
  cors({
    origin: "*",
  })
)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const dataEndpoint = '/data'

app.get(dataEndpoint, (req, res) => {
  res.send({ data })
})

app.post(dataEndpoint, (req, res) => {
  const { body } = req
  const date = new Date().getDay().toString() + '-' + new Date().getMonth().toString() + '-' + new Date().getFullYear().toString()
  const payload = { id: data.length + 1, createdOn: date, ...body }
  data.push(payload)
  res.send({ data })
})

app.delete(dataEndpoint, (req, res) => {
  data.pop()
  res.send({ data })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
