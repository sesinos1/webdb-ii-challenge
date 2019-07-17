const express = require('express');

const db = require('../data/dbconfig.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const cars = await db('cars');
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve fruits' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const fruit = await db('cars').where({ id });

    res.json(fruit);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve fruit' });
  }
});

router.post('/', async (req, res) => {
  try {
    const fruitData = req.body;
    const [id] = await db('cars').insert(fruitData);
    const newFruitEntry = await db('cars').where({ id });

    res.status(201).json(newFruitEntry);
  } catch (err) {
    console.log('POST error', err);
    res.status(500).json({ message: 'Failed to store data' });
  }
});

module.exports = router;