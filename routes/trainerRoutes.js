const express = require('express');
const { Trainer } = require('../models');
const {createTrainer, updateTrainer, deleteTrainer} = require('../controllers/trainerController')
const router = express.Router();


// Get all Trainers
router.get('/', async (req, res) => {
  try {
    const trainers = await Trainer.findAll();
    res.json(trainers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a specific Trainer by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const trainer = await Trainer.findByPk(id);

    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    res.json(trainer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', createTrainer);
router.put("/:id", updateTrainer);
router.delete("/:id", deleteTrainer);



 
module.exports = router;