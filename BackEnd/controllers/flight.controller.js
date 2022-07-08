const Flight = require('../models/Flight.model');

//Creates the flight to be stored in the database
const createFlight = async({flightNum,departDate,arriveDate,departTime,arriveTime,departAirport,arriveAirport,numPass,passLimit}) => {
    try{
        const flight = new Flight({
            flightNum,
            departDate,
            arriveDate,
            departTime,
            arriveTime,
            departAirport,
            arriveAirport,
            numPass,
            passLimit
        });
        await flight.save();
        return flight._id;
    }

    catch(err){
        console.error(err);
        throw{status:400, message: err};
    }
}

//Returns all available flights in the database
const findAllFlights = async (limit=0) => {
    const flights = await Flight.find();
    return flights;
}

//Finds a flight in the database based on its ID
const findFlightById = async id => {
    try{
        const flight = await Flight.findById(id);
        if (flight == null){
            throw `No flight with the id of ${flight} found.`;
        }
        return flight;
    } catch(err) {
        console.error(err);
        throw {status:404, message: err};
    }
}

//Allows the user to update a flight stored in the database
const updateFlightById = async (id, updatedFlight) => {
    try{
        const flight = await Flight.findOneAndUpdate({flightNum: id}, updatedFlight, {new:true});
        if (flight == null){
            throw `No flight to update`;
        }
        return flight;
    } catch(err){
        console.error(err);
        throw {status:404, message:err};
    }
}


//Allows the user to delete a flight stored in the database
const deleteFlightById = async id => {
    try{
        const flight = await Flight.findByIdAndRemove(id, {});
        if (flight == null){
            throw `No flight to delete with the id of ${flight}`;
        }
        return flight;
    } catch(err){
        console.error(err);
        throw {status:404, message:err};
    }
}

module.exports = { createFlight, findAllFlights, findFlightById, updateFlightById, deleteFlightById};