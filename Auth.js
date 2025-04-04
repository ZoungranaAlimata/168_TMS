const express = require('express')
const mongoose = require("mongoose")
const Student = require("./models/Student.model");

const app = express();
app.use(express.json());