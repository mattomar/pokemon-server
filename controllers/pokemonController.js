const { Pokemon, Trainer } = require("../models");
const ADMIN_PASSWORD = Number(process.env.ADMIN_PASSWORD); // Ensure it's a number

exports.createPokemon = async (req, res) => {
    const { password, name, type, level, photo, trainerId } = req.body;

    if (!password || Number(password) !== ADMIN_PASSWORD) {
      return res.status(403).json({ error: "Incorrect password" });
      
    }

    try {
        const trainer = await Trainer.findByPk(trainerId);
        if (!trainer) return res.status(400).json({ error: "Trainer not found" });

        const newPokemon = await Pokemon.create({ name, type, level, photo, trainerId });
        res.status(201).json(newPokemon);
    } catch (error) {
        console.error("Error creating Pokémon:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.deletePokemon = async (req, res) => {
  const { password } = req.body;
  const { id } = req.params;

  if (!password || Number(password) !== ADMIN_PASSWORD) {
    return res.status(403).json({ error: "Incorrect password" });
  }

  try {
      const pokemon = await Pokemon.findByPk(id);
      if (!pokemon) return res.status(404).json({ error: "Pokémon not found" });

      await pokemon.destroy();
      res.status(200).json({ message: "Pokémon deleted successfully" });
  } catch (error) {
      console.error("Error deleting Pokémon:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
};


exports.updatePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type, level, photo, trainerId } = req.body;

    const pokemon = await Pokemon.findByPk(id);
    if (!pokemon) {
      return res.status(404).json({ error: "Pokémon not found" });
    }

    // Ensure the trainer exists before updating
    const trainer = await Trainer.findByPk(trainerId);
    if (!trainer) {
      return res.status(400).json({ error: "Trainer not found" });
    }

    await pokemon.update({ name, type, level, photo, trainerId });

    res.json(pokemon);
  } catch (error) {
    console.error("Error updating Pokémon:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};