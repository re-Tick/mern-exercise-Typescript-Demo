const express = require('express');
const app = express();
const port = 5051;
const wait = (milliseconds) =>
    new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, milliseconds);
    });

const middleware1 = async (req, res, next) => {
    console.log('- 1');
    // await wait(10);
    console.log('- 2');
    next();
};

const middleware2 = async (req, res, next) => {
    console.log('- 3');
    // await wait(10);
    console.log('- 4');
    console.log('');
    next();
};

app.use(middleware1);
app.get('/', async (req, res, next) => {
    console.log('-- 1');
    // await wait(10);
    console.log('-- 2');
    console.log('hello');
    res.send('Hello World!');
    console.log('-- 3');
    // await wait(10);
    console.log('-- 4');
    next();
    return;
});
app.use(middleware2);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
