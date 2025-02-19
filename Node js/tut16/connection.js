const mongoose = require('mongoose')
async function connectToDB(url) {
    try {
        await mongoose.connect(url)
        console.log('Connected to MongoDB')
    }
    catch (err) {
        console.log("Error", err);
    }
}
module.exports = connectToDB;