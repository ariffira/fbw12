const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shopSchema = new Schema({
    shopName: String,
    area: String,
    city: String,
    toilet_tissue: String,
    rice: String,
    sugar: String,
    coronaPrecaution: String,
    card_use: Array,
    cash: String
});

const Shop = mongoose.model('Shop', shopSchema)

module.exports = Shop;