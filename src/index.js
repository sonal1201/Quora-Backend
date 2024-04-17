const express = require('express')
const bodyparser = require('body-parser');
const { PORT } = require('./config/server.config');
const connectDB = require('./config/db.config');
const apiRouter = require('./routes');
const app = express();

//Body-parsers...
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.text());


app.use('/api', apiRouter)

app.listen(PORT, async () => {
    console.log(`Port started listening ${PORT}`)
    await connectDB();
    console.log("Succesfully Connected to db");
})
