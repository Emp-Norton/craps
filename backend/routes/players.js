const router = require('express').Router();
const { Player } = require('../models');

router.get('/', async (req, res) => {
  try {
    const players = await Player.findAll();
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:playerId', async (req, res) => {
  try {
    const player = await Player.find(req.params.playerId);
    res.json(player);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

module.exports = router;
