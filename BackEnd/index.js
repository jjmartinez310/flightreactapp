const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080; // Default to 8080 if not in .env
app.use(express.json()); //Middleware that auto parses JSON into JS objects between each HTTP request and the endpoint
app.use(cors()); // Allow all traffic


// This binds a router object to the url /flight
// Any HTTP request starting with /routes will come here
const flightRouter =  require('./routes/flight.route.js');

app.use('/flights', flightRouter);

app.all('*', (req, res) => {
    res.status(404).send('We don\'t have the resource you\'re looking for.');
});

//MongoDB database connection
mongoose.connect("mongodb+srv://jardjmart:testpass@cluster0.vuw7qxr.mongodb.net/test")
    .then(() => {
        console.log('Successfully connected to MongoDB!');
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});