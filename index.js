const express = require('express')
const mongoose = require("mongoose")
const Student = require("./models/Student.model");

const app = express();
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.get("/api/Students", async (req,res) => { 
  Student.find().then((Students) => {
    res.status(200).send(Students);
  }).catch((err) => {
    res.status(500).send({
      message: err.message || "Some error Occurred while retrieving students.",

    }); 
  });
  
  const Students = await Student.find();
  res.send(Students);
 });

app.get("/api/Student/:id", async (req,res) => {
  const id = req.params.id;
  Student.findOne({idStudent: id})
  .then((student) => {
    if (!student) {
      return res.status(404).send({
        message: "Student not found with id" + id,
      });
    }
    res.status(200).send(student);
  })
  .catch((err) => {
    return res.status(500).send({
      message: "Error retrieving student with id" + id,
    });
  });
});


app.post("/api/student", async (req,res) => {

  Student.create(req.body)
  .then((student) => {
    res.status(201).send(student);
  }). catch((err) =>{
    res.status(500).send({
      message:
      err.message || "Some error occured while creating new student.",
    });
  })
  //const student = new Student({
   // idStudent: req.body.idStudent,
   // name: req.body.name,
    //age: req.body.cgpa,
    //department: req.body.department,
  //});
})
student
.save()
.then((data) => {
  res.status(201).send(data);
})
.catch((err) => {
  res.status(500).send({
    message: err.message || "Some error occurred while Creating the Student.",
  });
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
