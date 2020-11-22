const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    // product_name: String,
    //created_at: Date
    product_name: { type: String, unique: true, required: true},
    price: Number,
    created_at: { type: Date, default: Date.now()},
    updated_at: { type: Date},
    product_pic: [{ type: Schema.Types.ObjectId, ref: 'Picture'}],
    added_by: { type: Schema.Types.ObjectId, ref: 'User'}
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;