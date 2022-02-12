const mongoose = require('mongoose');
const mongooseSlugPlugin = require('mongoose-slug-plugin');
const ProductSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    price:  Number,
    image: String,
    quantity: Number,
    category: String,
  },
  { timestamps: true }
);

ProductSchema.plugin(mongooseSlugPlugin, { tmpl: '<%=name%>' });
module.exports = mongoose.model('Product', ProductSchema);