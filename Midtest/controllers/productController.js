const { Product } = require('../models/models');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products' });
  }
};

// Get a specific product by ProductID
exports.getProductById = async (req, res) => {
  const productID = req.params.id;
  try {
    const product = await Product.findOne({ ProductID: productID });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching product' });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  const { ProductID, LinkProduct, Title, Price } = req.body;
  try {
    const newProduct = new Product({ ProductID, LinkProduct, Title, Price });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: 'Error creating new product' });
  }
};

// Update a product by ProductID
exports.updateProductById = async (req, res) => {
  const productID = req.params.id;
  const { LinkProduct, Title, Price } = req.body;
  try {
    const product = await Product.findOne({ ProductID });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    product.LinkProduct = LinkProduct;
    product.Title = Title;
    product.Price = Price;
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error updating product' });
  }
};

// Delete a product by ProductID
exports.deleteProductById = async (req, res) => {
  const productID = req.params.id;
  try {
    const product = await Product.findOneAndDelete({ ProductID });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting product' });
  }
};
