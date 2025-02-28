const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
})

app.get('/', (req, res) => {
    res.send("successfull.......a.")
})

app.get('/docker', (req, res) => {
    res.send("completed docker build")
})

app.listen(8080, () => {
    console.log('server started on', 8080);
})