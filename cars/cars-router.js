const express = require('express');

const db = require('../data/dbconfig.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const cars = await db('cars');
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get cars' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [ cars ] = await db('cars').where({ id });

    if (cars) {
      res.json(cars);
    } else {
      res.status(404).json({ message: 'Could not find cars with given id.' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get car' });
  }
});

router.post('/', async (req, res) => {
  const cars = req.body;

  try {
    const [ id ] = await db('users').insert(cars);
    res.status(201).json({ created: id });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new car' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const count = await db('cars').where({ id }).update(changes);

    if (count) {
      res.json({ update: count });
    } else {
      res.status(404).json({ message: 'Could not find car with given id' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to update car' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const count = await db('cars').where({ id }).del();

    if (count) {
      res.json({ removed: count });
    } else {
      res.status(404).json({ message: 'Could not find missing perams' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete car' });
  }
});

module.exports = router;