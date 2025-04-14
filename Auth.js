// const express = require('express')
// const mongoose = require("mongoose")
// const Student = require("./models/Student.model");

// const app = express();
// app.use(express.json());

// app.post("/login", async (req, res) => {
//     res.send("Login");
// });
// app.post("/register", async (req, res) => {
//     Student.create(req.body).then(()=>{
//         res.status(201).send(user)

//     }).catch((error) =>{
//         console.log(error);
//     });

//     //console.log(req.body)
//     //res.send("Register");
// });

// app.listen(4000, ()=> {

//     console.log("Server is run on port 4000")
// });

// mongoose.connect("mongodb+srv://zoungranaa766:ZURq7uwTIfxYWrmG@cluster-1.w43yfj7.mongodb.net/IUTretryWrites=true&w=majority&appName=Cluster-1"

// ).then(() => {
//   console.log("Connected to MongoDB");

// }).catch((err) => {
//   console.log("Failed to connect to Mongo", err);

// });
