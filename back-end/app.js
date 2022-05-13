const express = require('express')
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

app.get('/data', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})