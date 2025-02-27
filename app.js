const express = require('express');
const cors = require('cors');
const pokemonRoutes = require('./routes/pokemonRoutes');
const trainerRoutes = require('./routes/trainerRoutes');
const models = require('./models');

const app = express();

// Define allowed origins (Replace with your deployed frontend URL)
const allowedOrigins = [
  'http://localhost:3005', // For local development
  'https://yourfrontend.com' // Replace with your actual deployed frontend domain
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

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