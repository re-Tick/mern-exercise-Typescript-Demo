/* eslint-disable import/first */
//  const {keployInstance} = require("typescript-sdk/dist/integrations/express/register");
// require("typescript-sdk/dist/integrations/node-fetch/require") // Require the node-fetch hook

var {keploy} = require("typescript-sdk/dist/integrations/express/register")
// const {NewContext, config} = require("typescript-sdk/dist/mock/mock.js")
const fetch = require("node-fetch")

// console.log(NewContext({Name: "df"}))
//  require("typescript-sdk/dist/integrations/octokit/require")
//  kmongo(keployInstance)
// const aftermidd = require("typescript-sdk/dist/integrations/express/middleware");
// const Keploy = require("typescript-sdk/dist/src/keploy");
let Exercise = require('./models/exercise.model');

// let Exercise = require('./models/exercise.model');

const express = require('express');
// const axios = require("axios")
const cors = require('cors');
// import Hook from "import-in-the-middle"
// Hook(["cors"], (exports, name, baseDir) => {
//   console.log("inside hook")
// })
// import cors from "cors";
const mongoose = require('mongoose');
// const { Octokit, App } = require("octokit");

require('dotenv').config();

// function test2() {
  const app = express();
  const port = process.env.PORT || 8080;
  
  // app.use(cors());
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

  app.post('/exercises/update/:id', (req, res) => {
    Exercise.findById(req.params.id)
      .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);
  
        exercise.save()
          .then(() => {
            console.log("exercise updated")
            fetch('https://reqres.in/api/users/2')
            .then(res => res.text())
            .then(text2 => {
                console.log("send tyext from server", text2)
                // rs.send(text2)
                // rs.emit("finish")
                fetch("https://reqres.in/api/users",
                {
                    method: "POST",
                    body: '{"name":"Chandler","job":"Data Processor"}'
                })
                .then(async res => {
                    return res.text()
                    // const text = await res.text()
                    // console.log("got response after fetch: ", text)
                    // rs.json(text)
                })
                .then(text => {
                  // console.log("---",re.body, typeof re.body);
              
                          console.log("got response after fetch: ", text)
                  //         rs.send(text)
                  //         rs.end()
                  res.json('Exercise updated!')
                      });
            })
            
          })
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
      console.log(" \npost handler execution completed\n")
  });
  app.post('/postData', function (re, rs) {
    console.log("POST request at /postData route");
    console.log(re.body);
    fetch("https://reqres.in/api/users",
    {
        method: "POST",
        body: JSON.stringify(re.body)
    })
    .then(res => res.text())
    .then(text => rs.send(text));
    // rs.json("OK")
    console.log(" \npostData handler execution completed\n")

});
  
  
  app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
  })
// }

// module.exports = test2