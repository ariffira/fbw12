const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// setup DB
let dataBaseLink = 'mongodb+srv://admin:adeladmin@adeldci.mmdjq.mongodb.net/postmannEX10'
mongoose.connect(dataBaseLink, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('DB connected.........') })
  .catch(err => console.log('DB not connected :' + err))
const Shop = require('./models/shop');

// setup body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//MyAPI
app.get('/api/coronaSale', (req, res) => {
  Shop.find((err, shops) => {
    let shopAPI = []
    shops.map(shop => {
      shopAPI.push({
        id: shop._id,
        name: shop.shopName,
        address: {
          area: shop.area,
          city: shop.city
        },
        products: {
          toilet_tissue: shop.toilet_tissue,
          rice: shop.rice,
          sugar: shop.sugar,
          coronaPrecaution: shop.coronaPrecaution,
        },
        payment: {
          cash: shop.cash,
          card: shop.card_use
        }
      })
    })
    res.json(shopAPI);
  })
});


//listen
app.listen(port, () => {
  console.log(`********************* Server is Running at http://localhost:${port} *********************`);
})