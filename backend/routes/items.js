const express = require('express');
const Item = require('../models/item');
const router = express.Router();

// DO NOT use authentication middleware here

router.get('/', async (req, res) => {
  const items = await Item.findAll();
  res.json(items);
});

router.post('/', async (req, res) => {
  const { name, quantity, price, description } = req.body;
  if (!name || quantity === undefined || price === undefined) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const item = await Item.create({ name, quantity, price, description });
  res.status(201).json(item);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, quantity, price, description } = req.body;
  const item = await Item.findByPk(id);
  if (!item) return res.status(404).json({ error: 'Item not found' });
  item.name = name;
  item.quantity = quantity;
  item.price = price;
  item.description = description;
  await item.save();
  res.json(item);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const item = await Item.findByPk(id);
  if (!item) return res.status(404).json({ error: 'Item not found' });
  await item.destroy();
  res.json({ success: true });
});

module.exports = router;