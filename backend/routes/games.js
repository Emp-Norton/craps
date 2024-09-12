const router = require('express').Router();
const { Game } = require('../models');

router.get('/', async (req, res) => {
  try {
    const games = await Game.findAll();
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:gameId', async (req, res) => {
  try {
    const game = await Game.find(req.params.gameId);
    res.json(game);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

module.exports = router;
