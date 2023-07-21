const express = require("express");
const router = express.Router();
const itemData = require("../controller/data");
const Item = require('../itemModel'); // Import the item model

router.get('/', async (req, res) => {
  try {
    const itemData = await Item.find();
    res.json(itemData);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching item data' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: 'Error creating new item' });
  }
});

router.get('/sort', async (req, res) => {
  try {
    const sortedMusic = await Item.find().sort({ played: -1 });
    res.json(sortedMusic);
  } catch (err) {
    res.status(500).json({ message: 'Error sorting music data' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching item by ID' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting item' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ message: 'Error updating item' });
  }
});

module.exports = router;
