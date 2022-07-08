const router = require('express').Router();
const { createFlight, findFlightById, findAllFlights, updateFlightById, deleteFlightById } = require('../controllers/flight.controller');
// A router functions the same as your standard app, but it's a subsection of your app

// GET /movies
router.get('/', async (req, res) => {
    const flights = await findAllFlights();
    res.json(flights);
});

router.post('/', async (req, res) => {
    try {
        const flightId = await createFlight(req.body);
        res.status(201).json({_id: flightId});
    } catch (err) {
        res.status(err?.status || 500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const flight = await findFlightById(req.params.id);
        res.json(flight);
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
});

router.put('/change/:id', async (req, res) =>{
    try {
        const flight = await updateFlightById(req.params.id, req.body);
        res.json(flight);
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const flight = await deleteFlightById(req.params.id);
        res.json(flight);
    } catch(err){
        res.status(err?.status || 400).json(err);
    }
});
module.exports = router;

