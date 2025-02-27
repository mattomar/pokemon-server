const express = require("express");
const cors = require("cors");
const pokemonRoutes = require("./routes/pokemonRoutes");
const trainerRoutes = require("./routes/trainerRoutes");
const models = require("./models");

const app = express();

// ✅ Allow requests from your frontend & localhost
const allowedOrigins = [
  "http://localhost:3005", // Local Dev
  "https://your-frontend-domain.com", // Your Deployed Frontend
];

app.use(
  cors({
    origin: allowedOrigins, // ✅ Explicitly allow these origins
    credentials: true, // If using cookies/auth
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Pokémon API!");
});

// Routes
app.use("/api/pokemon", pokemonRoutes);
app.use("/api/trainers", trainerRoutes);

// Sync DB and start server
models.sequelize.sync({ force: false }).then(() => {
  console.log("Database synced");

  const PORT = process.env.PORT || 8080; // ✅ Match Railway Port
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});