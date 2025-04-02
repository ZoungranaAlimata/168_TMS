const mongoose = require("mongoose")
const express = require('express')
const app = express()

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(4000, ()=> {

    console.log("Server is run on port 4000")
});

mongoose.connect("mongodb+srv://zoungranaa766:ZURq7uwTIfxYWrmG@cluster-1.w43yfj7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-1"

).then(() => {
  console.log("Connected to MongoDB");

}).catch((err) => {
  console.log("Failed to connect to Mongo", err);

});
