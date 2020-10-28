const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    // product_name: String,
    //created_at: Date
    product_name: { type: String, required: true},
    price: Number,
    created_at: { type: Date, default: Date.now()},
    updated_at: Date
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;