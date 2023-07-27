const Product = require('../models/Product');

const productController = {
  createProduct: async (req, res) => {
    try {
      const { name, description, price } = req.body;
      const product = new Product({ name, description, price });
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  },

  getProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  },

  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(404).json({ error: 'Product not found' });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(product);
    } catch (error) {
      res.status(404).json({ error: 'Product not found' });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndRemove(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      res.status(404).json({ error: 'Product not found' });
    }
  },
};

module.exports = productController;