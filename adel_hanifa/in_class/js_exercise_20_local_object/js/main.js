let products = [
  {
    id: '0001',
    product_name: 'Adidas Men`s T-Shirt',
    product_type: 'T-Shirts',
    price: 49.99.toFixed(2),
    date_of_add: '09.06.2020',
    quantity: '47',
    date_of_expire: '09.07.2020',
    manufacture_country: 'Germany',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Red', 'Blue', 'Green'],
    product_image: '<img src="img/0001.png" class="img-responsive" style="width:100%">',
    discount: 0.70.toFixed(2),
    lastprice: function() {
      return (Number(this.price) * (1 - Number(this.discount))).toFixed(2);
    }
  },
  {
    id: '0002',
    product_name: 'Vaude Men`s Farley Zo IV trousers',
    product_type: 'Trousers',
    price: 66.99.toFixed(2),
    date_of_add: '09.05.2020',
    quantity: '20',
    date_of_expire: '--.--.----',
    manufacture_country: 'France',
    size: [46, 48, 50, 52, '<del>54</del>', 56],
    color: ['Black', 'Muddy', 'Tarn'],
    product_image: '<img src="img/0002.png" class="img-responsive" style="width:100%">',
    discount: 0.00.toFixed(2),
    lastprice: function() {
      return (Number(this.price) * (1 - Number(this.discount))).toFixed(2);
    }
  },
  {
    id: '0003',
    product_name: 'Jack Wolfskin Jasper Flex Jacket',
    product_type: 'Jackets',
    price: 129.99.toFixed(2),
    date_of_add: '01.06.2020',
    quantity: '34',
    date_of_expire: '10.07.2020',
    manufacture_country: 'Germany',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Dark Indigo', 'Black', '<del>Lava Red</del>'],
    product_image: '<img src="img/0003.png" class="img-responsive" style="width:100%">',
    discount: 0.15.toFixed(2),
    lastprice: function() {
      return (Number(this.price) * (1 - Number(this.discount))).toFixed(2);
    }
  },
  {
    id: '0004',
    product_name: 'Asics Gt-2000 8 Men`s Running Shoes',
    product_type: 'Shoes',
    price: 117.00.toFixed(2),
    date_of_add: '09.05.2020',
    quantity: '87',
    date_of_expire: '--.--.----',
    manufacture_country: 'USA',
    size: [40, 41, '<del>42</del>', 43, 44, 45],
    color: ['White Black', 'Multicolor', 'Blue'],
    product_image: '<img src="img/0004.png" class="img-responsive" style="width:100%">',
    discount: 0.00.toFixed(2),
    lastprice: function() {
      return (Number(this.price) * (1 - Number(this.discount))).toFixed(2);
    }
  },
  {
    id: '0005',
    product_name: 'Nike Men`s CRW Ft Pullover Sweater',
    product_type: 'Sweaters',
    price: 30.08.toFixed(2),
    date_of_add: '01.03.2020',
    quantity: '41',
    date_of_expire: '--.--.----',
    manufacture_country: 'China',
    size: ['S', '<del>M</del>', 'L', 'XL'],
    color: ['Black/White'],
    product_image: '<img src="img/0005.png" class="img-responsive" style="width:100%">',
    discount: 0.00.toFixed(2),
    lastprice: function() {
      return (Number(this.price) * (1 - Number(this.discount))).toFixed(2);
    }
  },
  {
    id: '0006',
    product_name: 'Under Armour Men`s Classic Fit Cap',
    product_type: 'Caps',
    price: 27.95.toFixed(2),
    date_of_add: '09.06.2020',
    quantity: '90',
    date_of_expire: '25.06.2020',
    manufacture_country: 'China',
    size: ['One size fits all'],
    color: ['White', 'Black', 'Blue', '<del>Grey</del>'],
    product_image: '<img src="img/0006.png" class="img-responsive" style="width:100%">',
    discount: 0.20.toFixed(2),
    lastprice: function() {
      return (Number(this.price) * (1 - Number(this.discount))).toFixed(2);
    }
  },
  {
    id: '0001',
    product_name: 'Adidas Herren T-Shirt',
    product_type: 'T-Shirts',
    price: 49.99.toFixed(2),
    date_of_add: '09.06.2020',
    quantity: '47',
    date_of_expire: '09.07.2020',
    manufacture_country: 'Germany',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Red', 'Blue', 'Green'],
    product_image: '<img src="img/0001.png" class="img-responsive" style="width:100%">',
    discount: 0.70.toFixed(2),
    lastprice: function() {
      return (Number(this.price) * (1 - Number(this.discount))).toFixed(2);
    }
  },
  {
    id: '0002',
    product_name: 'Vaude Men`s Farley Zo IV trousers',
    product_type: 'Trousers',
    price: 66.99.toFixed(2),
    date_of_add: '09.05.2020',
    quantity: '20',
    date_of_expire: '--.--.----',
    manufacture_country: 'France',
    size: [46, 48, 50, 52, '<del>54</del>', 56],
    color: ['Black', 'Muddy', 'Tarn'],
    product_image: '<img src="img/0002.png" class="img-responsive" style="width:100%">',
    discount: 0.00.toFixed(2),
    lastprice: function() {
      return (Number(this.price) * (1 - Number(this.discount))).toFixed(2);
    }
  },
  {
    id: '0003',
    product_name: 'Jack Wolfskin Jasper Flex Jacket',
    product_type: 'Jackets',
    price: 129.99.toFixed(2),
    date_of_add: '01.06.2020',
    quantity: '34',
    date_of_expire: '10.07.2020',
    manufacture_country: 'Germany',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Dark Indigo', 'Black', '<del>Lava Red</del>'],
    product_image: '<img src="img/0003.png" class="img-responsive" style="width:100%">',
    discount: 0.15.toFixed(2),
    lastprice: function() {
      return (Number(this.price) * (1 - Number(this.discount))).toFixed(2);
    }
  },
  {
    id: '0004',
    product_name: 'Asics Gt-2000 8 Men`s Running Shoes',
    product_type: 'Shoes',
    price: 117.00.toFixed(2),
    date_of_add: '09.05.2020',
    quantity: '87',
    date_of_expire: '--.--.----',
    manufacture_country: 'USA',
    size: [40, 41, '<del>42</del>', 43, 44, 45],
    color: ['White Black', 'Multicolor', 'Blue'],
    product_image: '<img src="img/0004.png" class="img-responsive" style="width:100%">',
    discount: 0.00.toFixed(2),
    lastprice: function() {
      return (Number(this.price) * (1 - Number(this.discount))).toFixed(2);
    }
  },
  {
    id: '0005',
    product_name: 'Nike Men`s CRW Ft Pullover Sweater',
    product_type: 'Sweaters',
    price: 30.08.toFixed(2),
    date_of_add: '01.03.2020',
    quantity: '41',
    date_of_expire: '--.--.----',
    manufacture_country: 'China',
    size: ['S', '<del>M</del>', 'L', 'XL'],
    color: ['Black/White'],
    product_image: '<img src="img/0005.png" class="img-responsive" style="width:100%">',
    discount: 0.00.toFixed(2),
    lastprice: function() {
      return (Number(this.price) * (1 - Number(this.discount))).toFixed(2);
    }
  },
  {
    id: '0006',
    product_name: 'Under Armour Men`s Classic Fit Cap',
    product_type: 'Caps',
    price: 27.95.toFixed(2),
    date_of_add: '09.06.2020',
    quantity: '90',
    date_of_expire: '25.06.2020',
    manufacture_country: 'China',
    size: ['One size fits all'],
    color: ['White', 'Black', 'Blue', '<del>Grey</del>'],
    product_image: '<img src="img/0006.png" class="img-responsive" style="width:100%">',
    discount: 0.20.toFixed(2),
    lastprice: function() {
      return (Number(this.price) * (1 - Number(this.discount))).toFixed(2);
    }
  }
];

let users = [
  {
    username: 'AdelHanifa',
    age: '28',
    adminCustomer: 'admin',
    country: 'syria',
    email: 'adel@hanifa.com',
    password: '12345678'
  },
  {
    username: 'HanifaAdel',
    age: '28',
    adminCustomer: 'customer',
    country: 'syria',
    email: 'adel@hanifa.de',
    password: '12345678'
  },

]

////  copy users 
let fileData = localStorage.getItem('usersFile');
users = JSON.parse(fileData);
console.log(users)

////// save produts
let dataForSaveProducts = JSON.stringify(products);

localStorage.setItem('productsFile', dataForSaveProducts);

////// save users

let dataForSaveUsers = JSON.stringify(users);

localStorage.setItem('usersFile', dataForSaveUsers);





function loginButton (){
  window.location.href = '/login.html';
}


function sginupButton (){
  window.location.href = '/signup.html';
}
