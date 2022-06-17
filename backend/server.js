const v = require("typescript-sdk/dist/integrations/express/register");
const aftermidd = require("typescript-sdk/dist/integrations/express/middleware");
const Keploy = require("typescript-sdk/dist/src/keploy");

let Exercise = require('./models/exercise.model');

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017/test?readPreference=primary&directConnection=true&ssl=false";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


const listen = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})