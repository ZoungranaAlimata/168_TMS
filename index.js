const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(4000, ()=> {

    console.log("Server is run on port 4000")
});