const mongoose = require('mongoose')

async function connectionDB(){
    const result = mongoose.connect('mongodb+srv://anandstephen:1234567890@cluster0.m8g8e.mongodb.net/UserIGDTUW')
    console.log("DB Connected")
}

module.exports = connectionDB