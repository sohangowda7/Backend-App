const express = require('express')
const app = express()

require('dotenv').config()

app.get('/', (req, res) => {
  res.send('Hello World!-NodeJS')
})

app.get('/',(req,res)=> { 
    res.send('hello')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})