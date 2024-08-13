const express = require('express')
const app = express()

require('dotenv').config()

app.get('/', (req, res) => {
  res.send('Hello World!-NodeJS')
})

app.get('/hello',(req,res)=> { 
    res.send('hello')
})
app.get('/hello',(req,res)=> { 
    res.send('hello')
})

app.get('/json', (req, res)=>  {
        res.json({
            "userId": 1,
            "id": 5,
            "title": "nesciunt quas odio",
            "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
          },)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})