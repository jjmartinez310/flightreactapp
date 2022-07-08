const router = require('express').Router();
const { createFlight, findFlightById, findAllFlights, updateFlightById, deleteFlightById } = require('../controllers/flight.controller');

// GET /movies
router.get('/', async (req, res) => {
    const flights = await findAllFlights();
    res.json(flights);
});

//Post to create the flight form
router.post('/', async (req, res) => {
    try {
        const flightId = await createFlight(req.body);
        res.status(201).json({_id: flightId});
    } catch (err) {
        res.status(err?.status || 500).json(err);
    }
});

//Get by ID for the flight form
router.get('/:id', async (req, res) => {
    try {
        const flight = await findFlightById(req.params.id);
        res.json(flight);
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
});

//Update function for the flight form
router.put('/change/:id', async (req, res) =>{
    try {
        const flight = await updateFlightById(req.params.id, req.body);
        res.json(flight);
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
})

//Delete function implemented on the flight tiles
router.delete('/delete/:id', async (req, res) => {
    try {
        const flight = await deleteFlightById(req.params.id);
        res.json(flight);
    } catch(err){
        res.status(err?.status || 400).json(err);
    }
});
module.exports = router;

