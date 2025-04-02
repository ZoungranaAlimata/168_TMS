const express = require('express')
const mongoose = require("mongoose")
const Student = require("./models/Student.model");

const app = express();
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get("/api/students", async (req,res) =>{ const Students = await Student.find();
  res.send(students);
 });

app.listen(4000, ()=> {

    console.log("Server is run on port 4000")
});

mongoose.connect("mongodb+srv://zoungranaa766:ZURq7uwTIfxYWrmG@cluster-1.w43yfj7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-1"

).then(() => {
  console.log("Connected to MongoDB");

}).catch((err) => {
  console.log("Failed to connect to Mongo", err);

});
