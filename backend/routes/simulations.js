const router = require('express').Router();
const { Simulation } = require('../models');

router.get('/', async (req, res) => {
  try {
    const simulations = await Simulation.findAll();
    res.json(simulations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:simulationId', async (req, res) => {
  try {
    const simulation = await Simulation.find(req.params.simulationId);
    res.json(simulation);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

module.exports = router;
