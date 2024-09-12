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
    const player = await P{}
  }
})

module.exports = router;
