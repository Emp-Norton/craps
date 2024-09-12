const express = require('express');
const cors = require('cors');
// const { sequelize } = require('./models');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// Import routes
const playersRouter = require('./routes/players');
// const gamesRouter = require('./routes/games');
// const strategiesRouter = require('./routes/strategies');
// const simulationsRouter = require('./routes/simulations');

app.use('/api/players', playersRouter);
// app.use('/api/games', gamesRouter);
// app.use('/api/strategies', strategiesRouter);
// app.use('/api/simulations', simulationsRouter);

// Synchronize database models and start the server
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//   });
// }).catch(error => {
//     console.error('Error synchronizing database:', error);
// });
