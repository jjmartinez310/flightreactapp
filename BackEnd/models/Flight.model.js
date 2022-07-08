const mongoose = require('mongoose');

//Defining a schema and adding input validation
const flightSchema = new mongoose.Schema({
    flightNum: {
        required: true,
        type: String,
        match: [/^[a-zA-Z0-9]{6}$/, "Please use a valid 6 digit flight number"]
    },
    departDate: {
        required: true,
        type: String,
        match: [/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/, "Please enter the date in yyyy-mm-dd format"]
    },
    arriveDate: {
        required: true,
        type: String,
        match: [/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/, "Please enter the date in yyyy-mm-dd format"]
    },
    departTime: {
        required: true,
        type: String,
        match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Enter your time in HH:MM format"]
    },
    arriveTime: {
        required: true,
        type: String,
        match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Enter your time in HH:MM format"]
    },
    departAirport: {
        required: true,
        type: String,
        match: [/[A-Z]{3}/i, "Enter a 3 letter combination for the desired Airport"]
    },
    arriveAirport: {
        required: true,
        type: String,
        match: [/[A-Z]{3}/i, "Enter a 3 letter combination for the desired Airport"]
    },
    numPass: {
        required: true,
        type: Number,
        default: 0,
        validate(value){
            if (value < 0) throw new Error("There can not be negative passengers")
        },
        validate(numPass, passLimit){
            if (numPass > passLimit) throw new Error("The plane can't hold this many passengers")
        }
    },
    passLimit: {
        required: true,
        type: Number,
        default: 1,
        validate(value){
            if (value < 0) throw new Error("There can not be negative passengers")
        },
        validate(numPass, passLimit){
            if (numPass > passLimit) throw new Error("The plane can't hold this many passengers")
        }
    }
})
const Flight = mongoose.model('Flight', flightSchema, 'Flights');
module.exports = Flight;
