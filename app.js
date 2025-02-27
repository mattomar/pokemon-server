const express = require('express');
const cors = require('cors');
const pokemonRoutes = require('./routes/pokemonRoutes');
const trainerRoutes = require('./routes/trainerRoutes');
const models = require('./models');



const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON body

app.get('/', (req, res) => {
  res.send('Welcome to the Pokémon API!');
});


// Use Routes
app.use('/api/pokemon', pokemonRoutes);
app.use('/api/trainers', trainerRoutes);

// Sync database before starting the server
models.sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});