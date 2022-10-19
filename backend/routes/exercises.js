require("typescript-sdk/dist/integrations/octokit/require")
// require("typescript-sdk/dist/integrations/node-fetch/require") // Require the node-fetch hook
const { Octokit, App } = require("octokit");
const fetch = require("node-fetch")

const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get(async (req, res, next) => {
  let ritik = 21;

  // (await Exercise.find({})).then(( data, err) => {
  //   console.log(".then ", data)
  //   res.json(data)

  // })

  // Exercise.find({}, (err, data) => {
  //   res.json(data)
  // })
  // }, {}, ()=>{console.log("callback in find")})

  // try{
    const octokit1 = new Octokit({ auth: `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`});
    // const octokit1 = new Octokit({});


    const {
        data: { login },
    } = await octokit1.rest.users.getAuthenticated({});
    // // const x = await octokit.rest.users.getAuthenticated({});

    console.log("Hello, %s\n", login);

    // const issues = await octokit1.paginate(octokit1.rest.issues.listForRepo, {
    //   owner: "re-Tick",
    //   repo: "Protoc",
    //   per_page: 100,
    // });

    // console.log(issues)

    // await octokit.rest.issues.create({
    //   owner: "re-Tick",
    //   repo: "Protoc",
    //   title: "Hello world from 7 " + login,
    // });

    const app = new App({  appId: "248799",privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAyDyhop8YSJgp+rvZZrCKDl01cxGz0ZNMfpys6fAKHxuyt5PI
9xC08DRtvF0kUgbfDsFTFpeoRabSiwqvVusCaQtUeK6dAYU2T3ZJJf0aWLV5BNkh
saOzFk+QVtEwCmlbDVUhtXGonXlDnTe+QK3756tfsf+Fu/G+qGLdhjC+KbAobaLH
4sGYL7+spnPzaRwmVOkCsCG5gghlNTGznzKEWQi0tlDJX3H1aBfghD9/wLT6+xEP
0BLUgIkWZAQr04Y3ththL4BZT83rC+FXRLMIMeNAg19iAlyfku45Qe5OipGED739
frFs1nol9KDlCLK3cuNxv5dj4llP1yxNeBvg3wIDAQABAoIBAAiy0Za98JEewxwY
Uv5qBuVO2UaRa01cZ8NMTRqwidAGJQJikiVhfWq97FJ1fWFu2PvMHC7sEaxM7fKK
WUmeVfF4Q4gmlb1+KvjSu6TB1QYrhAFY6WTNJrd+Z1fOKJcbMpBmtVsrf9avcOeA
h2xJ4pqS0EpsPkQG4XBxMwxkS66F29wEEeJNKBgcyUEeZgvNS8g3PgUC1c+p/OyK
PxpyoIKuQDLtG3rEYf4HfHJzCXPLmn5pzyAz3GdKfgMNSyRQGomvP90KrgIjWbab
RqggKG+3ZdRK5HBcNuFVwmP39d3ntHHovtMR9Yjd1s4d+SE4O3pttQBf9RmenTRy
AR6Xe7kCgYEA64ULk/mWlbetguYDrBEFmkhuwTsrVDOy6Kkx1Fx51z7AvXNoeksW
KmFajHuxCQuCNJT3rtBAsBQelulWXOp19WaR0WyhPzTPDxw/6j2YwPrzPDVqTVrt
57khBec8HvUPagFA1IWfOvARLgEjU20sohlgcmyAoIBuejK4fKmOAxMCgYEA2aYl
jcvwy90mobZmGl3P6HCOMlPioSW1YJ/bN5a67YwM5lczn+2dorSZrWs+iMvxYLLc
55t4407uj+KwIPO96A0EKX80EjV9TITOuLQftnS6Gyv+L8l0AHTDyKUHFZwFWjQl
31h+rEu3I0vPpJApUF39ssvDopmaX2SuTWGbmIUCgYB9tRGs9bbuSo+OIn8rRBqd
crPK524FD2Ma09QI6SMPRCtT81l8jL9T94qBGTQxA7eHoUtiPz2HvfVlzz2Ncodr
aEfEZBrcxa8O/aEPwbjaqBdTt575kuMQn7uEjxuD2oFTrz+PL5MBvkktKOZWDRuZ
mbnk2Qz+ng5ZouDdiRKHiQKBgFITT5IbWCDossrEx9gljGOxHk5oR8xRNgbMAZUC
6FbwO2UZeURUDN/wjwtQp/JaRhobGSbWAE5n05q694RVpkW9stYbO/2p4iha5MHO
Wy8o8Y2Rl3dZ1r7dSX9+jB9gCLytcaK58nryyosq6ZC7NHk0GJm2MX49wnM6umg/
6LcpAoGAf70UJ2foM+jl8o3iaEXgYKXK9aB6U11zqGSbiBoDwPjbxb6RHgb0/bEz
YA1U4RG5ay4catmpe6WxKkB/L0ynQbrM9yiEFhT80EHL5Ra4AKyoVClqgOwO7b/c
4rTR4QUQVP4rtSefcLQ5m6qVBJp+6OZitUgbOf5EDsfpTiqAez4=
-----END RSA PRIVATE KEY-----`, Octokit: Octokit.defaults({foo: 1})})
    const { data: slug } = await app.octokit.rest.apps.getAuthenticated();
    console.log(" ---" , slug)

    // for await (const { octokit, repository } of app.eachRepository.iterator()) {
    //   // https://docs.github.com/en/rest/reference/repos#create-a-repository-dispatch-event
    //   await octokit.rest.repos.createDispatchEvent({
    //     owner: "re-Tick",
    //     repo: "Protoc",
    //     event_type: "pull_request.opened",
    //     client_payload: {
    //       foo: "bar",
    //     },
    //   });
    //   console.log("Event distpatched for %s", "Protoc");
    // }
    const octokit = await app.getInstallationOctokit(30239231);
    await octokit.rest.issues.create({
      owner: "re-Tick",
      repo: "Protoc",
      title: "Hello " + slug.slug,
    });


    let exercises = await Exercise.find({})
    res.setHeader("foo1", "bar1")
    res.json({exercises, ts: Date.now()})
    // res.json(exercises)
  // } catch(err){
  //   console.log(err)
  // }
  // next()
  // Exercise.find()
  //   .then(exercises => res.json(exercises))
  //   .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/update/:id').post((req, res) => {
//   Exercise.findById(req.params.id)
//     .then(exercise => {
//       exercise.username = req.body.username;
//       exercise.description = req.body.description;
//       exercise.duration = Number(req.body.duration);
//       exercise.date = Date.parse(req.body.date);

//       exercise.save()
//         .then(() => res.json('Exercise updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/postData').post(function (re, rs) {
  console.log("POST request at /exercises/postData route");
  console.log(re.body);
  fetch("https://reqres.in/api/users",
  {
      method: "POST",
      body: '{"name":"Chandler","job":"Data Processor"}'
  })
  .then(res => res.text())
  .then(text => 
    {
      console.log(text)
      return rs.send(text)
    }
  );
  // rs.json("OK")
});

module.exports = router;