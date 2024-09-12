const router = require('express').Router();
const { Strategy } = require('../models');

router.get('/', async (req, res) => {
  try {
    const strategies = await Strategy.findAll();
    res.json(strategies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:strategyId', async (req, res) => {
  try {
    const strategy = await Strategy.find(req.params.strategyId);
    res.json(strategy);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

module.exports = router;
