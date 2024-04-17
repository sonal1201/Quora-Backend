const mongoose = require('mongoose')
const { MONGO_DB } = require('./server.config')

async function connectDB() {
    try {
        await mongoose.connect(MONGO_DB);
    } catch (error) {
        console.log("Unable to connect to the DB server");
        console.log(error);
    }
}

module.exports = connectDB