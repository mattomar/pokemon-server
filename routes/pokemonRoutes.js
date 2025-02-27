const express = require('express');
const { Pokemon, Trainer } = require('../models'); // Include Trainer model
const { createPokemon, deletePokemon, updatePokemon } = require('../controllers/pokemonController');
const router = express.Router();

// GET all Pokémon with their Trainer details
router.get('/', async (req, res) => {
  try {
    const pokemons = await Pokemon.findAll({
      attributes: ['id', 'name', 'type', 'level', 'trainerId', 'photo'],
      include: {
        model: Trainer,
        attributes: ['id', 'name'],
      },
    });

    console.log("Pokemons fetched: ", pokemons);
    res.json(pokemons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// NEW: GET a single Pokémon by ID with its Trainer details
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.findByPk(id, {
      attributes: ['id', 'name', 'type', 'level', 'trainerId', 'photo'],
      include: {
        model: Trainer,
        attributes: ['id', 'name'],
      },
    });
    if (!pokemon) {
      return res.status(404).json({ error: "Pokémon not found" });
    }
    res.json(pokemon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

  
// POST: Create a new Pokémon
router.post('/', createPokemon);

router.delete("/:id", deletePokemon);

router.put("/:id", updatePokemon);



module.exports = router;