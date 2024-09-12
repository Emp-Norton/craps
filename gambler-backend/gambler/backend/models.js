const Sequelize = require('sequelize');
const sequelize = require('./config/db.js')

const Player = sequelize.define('player', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  win_loss: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  balance: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
});

const Game = sequelize.define('game', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  house_ev: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
});

const Strategy = sequelize.define('strategy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
});

const SavedSimulation = sequelize.define('saved_simulation', {
   game: {
    type: Game
   },

});

// Define associations here if needed

module.exports = {
  Player,
  Game,
  Strategy,
  SavedSimulation,
  sequelize
};



