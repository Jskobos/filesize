const express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.get('/', (req,res) => {
  res.send('Hello!')
})

app.listen(port, () => {
  console.log("Express app listening on port " + port)
})