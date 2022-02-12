const Product = require("../../models/Product");


exports.getProducts = async (req, res, next) => {
    try {
      const products = await Product.find();
      return res.json(products);
    } catch (error) {
      next(error);
    }
  };

  exports.fetchProduct = async (req, res, next) => {
    try {
        const {productId} = req.params
      const product = await Product.findById(productId);
      if (product) {
res.status(200).json(product);
    } else {
        const error = new Error("Product not found");
        error.status = 404;
        next(error);
      }
    } catch (error) {
      next(error);
    }
  };
  

exports.productCreate = async (req, res, next) => {
    try {
      if (req.file) {
        req.body.image = `${req.protocol}://${req.get("host")}/${req.file.path}`;
      }
      const newProduct = await Product.create(req.body);
      return res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  };
  
  exports.productDelete = async (req, res, next) => {
    try {
      const {productId} = req.params;
      const foundProduct = await Product.findById(productId);
      if (foundProduct) 
      {
          foundProduct.remove();

          res.status(204).end();
      }
      else {
          const err = new Error("product not found!!");
          err.status =404;
          next(err);

         
      }
      
    } catch (error) {
      next(error);
    }
  };
  
  exports.productUpdate = async (req, res, next) => {
    try {
      if (req.file) {
        req.body.image = `${req.protocol}://${req.get("host")}/${req.file.path}`;
      }
      const {productId} = req.params;
      let foundProduct = await Product.findById(productId);
      if (foundProduct) 
      {
        foundProduct = await Product.findByIdAndUpdate(productId, req.body, {
            new: true,
          });
          res.json(foundProduct);
      }
      else {
          const err = new Error("product not found!!");
          err.status =404;
          next(err);

         
      }
      

     
    } catch (error) {
      next(error);
    }
  };