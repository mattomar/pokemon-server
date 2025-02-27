const { Pokemon, Trainer } = require("../models");

const ADMIN_PASSWORD = Number(process.env.ADMIN_PASSWORD); // Ensure it's a number

// Create a Trainer
exports.createTrainer = async (req, res) => {
  try {
    const { password, name, age, photo, region } = req.body;

    if (!password || Number(password) !== ADMIN_PASSWORD) {
      return res.status(403).json({ error: "Incorrect password" });
    }

    const newTrainer = await Trainer.create({ name, age, photo, region });

    res.status(201).json(newTrainer);
  } catch (error) {
    console.error("Error creating Trainer:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update Trainer
exports.updateTrainer = async (req, res) => {
  try {
    const { id } = req.params;
    const { password, name, age, photo, region } = req.body;

    if (!password || Number(password) !== ADMIN_PASSWORD) {
      return res.status(403).json({ error: "Incorrect password" });
    }

    const trainer = await Trainer.findByPk(id);
    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    await trainer.update({ name, age, photo, region });

    res.json(trainer);
  } catch (error) {
    console.error("Error updating Trainer:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete Trainer
exports.deleteTrainer = async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;

    if (!password || Number(password) !== ADMIN_PASSWORD) {
      return res.status(403).json({ error: "Incorrect password" });
    }

    const trainer = await Trainer.findByPk(id);
    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    await trainer.destroy();
    res.json({ message: "Trainer deleted successfully" });
  } catch (error) {
    console.error("Error deleting Trainer:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};