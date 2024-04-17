const express = require('express')
const bodyparser = require('body-parser');
const { PORT } = require('./config/server.config');
const app = express();

//Body-parsers...
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.text());

app.use('/', (req, res) => {
    res.send({
        msg: "Server created successfully"
    })
})

app.listen(PORT, async () => {
    console.log(`Port started listening ${PORT}`)
})
