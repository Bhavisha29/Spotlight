const mongoose = require("mongoose")
const dataSchema = new mongoose.Schema({
    namePerson: String,
    number: Number,
    age:Number,
    gender: String,
    dob: Number,
    mailid: String,
    height: String,
    weight: String,
    address: String,
    portfolio: String
})

module.exports = mongoose.model("Data",dataSchema)