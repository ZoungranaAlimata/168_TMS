const express = require("express");
const mongoose = require("mongoose");
const Student1 = require("./models/Student.model");
const app = express();
app.use(express.json());

app.get('/',(req, res) => {
  res.send('Hello World I am Zoungrana Alimata');
});

app.get("/api/students", async (req,res) => { 
  const students = await Student1.find();
  Student1.find().then((students) => {
    res.status(200).send(students);
  }).catch((err) => {
    res.status(500).send({
      message: err.message || "Some error Occurred while retrieving students.",
    });
  });
 });

// app.get("/api/student/:id", async (req,res) => {
//   const id = req.params.id;
//   Student.findOne({idStudent: id})
//   .then((student) => {
//     if (!student) {
//       return res.status(404).send({
//         message: "Student not found with id" + id,
//       });
//     }
//     res.status(200).send(student);
//   })
//   .catch((err) => {
//     return res.status(500).send({
//       message: "Error retrieving student with id" + id,
//     });
//   });
// });

app.post("/api/student", async(req,res) => {
  const student = new Student(req.body);
  await student.save();
  Student.create(req.body).then((student) => {
    res.status(201).send(student);
  }).catch((err) =>{
    res.status(500).send({
      message: err.message || "Some error occured while creating new student.",
    });
  });
});


app.listen(5000, ()=> {

    console.log("Server is run on port 5000")
});

mongoose.connect("mongodb+srv://zoungranaa766:ZURq7uwTIfxYWrmG@cluster-1.w43yfj7.mongodb.net/IUT?retryWrites=true&w=majority&appName=Cluster-1"

).then(() => {
  console.log("Connected to MongoDB");

}).catch((err) => {
  console.log("Failed to connect to Mongo", err);

});
mongoos