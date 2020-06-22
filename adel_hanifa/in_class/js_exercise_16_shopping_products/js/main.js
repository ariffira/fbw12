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

let itemCount = 0;
let cart = ['You have 0 items in the cart'];

showProductsPage();

cart.map(displayCart)

function showProductsPage(){
  categoryBar.innerHTML = `
    <div class="col-sm-12">
      <p class="pull-right">
        <span>Search by category:</span>
        <select name="category" id="categoryTD" onchange="showProducts()">
          <option value="all">All category</option>
        </select>
      </p>
    </div>`;
  products.map(addProductsCategoryOption);
  showProducts()
}

function addProductsCategoryOption(item, index){
  var x = item.product_type;
  if (index == 0){
    categoryTD.innerHTML += `<option value="${x}" onclick="showProducts()">${x}</option>`;
  }
  else {
    for (let i = 0; i < index; i++) {
      //console.log(x);
      //console.log(products[i].product_type);
      var checkReprat = 1;
      if (x == products[i].product_type){
        checkReprat = 0;
        break;
      }
    }
    if (checkReprat == 1){
      categoryTD.innerHTML += `<option value="${x}">${x}</option>`;
    }
  }
}

function showProducts(){
  containerID.innerHTML = '';
  if (categoryTD.value == "all"){
    products.map(displayProducts);
  }
  else {
    const selcetProducts = products.filter(products => products.product_type == categoryTD.value);
    return selcetProducts.map(displayProducts);
    
  }
}

function displayProducts(item, count) {
  var displayDIV = [
    nosale = `
            <div class="col-sm-4">
              <div class="panel panel-success">
                <div class="panel-heading text-uppercase"><b id="nameId${count}">${item.product_name}</b></div>
                <div class="panel-body">
                  <div id="imgId${count}" data-toggle="modal" data-target="#myModal${count}">${item.product_image}</div>
                </div>
                <div class="panel-footer text-success">
                  <b>Prise: <i id="priseId${count}">${item.lastprice()}</i> €</b>
                  <span class="pull-right" id="saleId${count}"></span>
                </div>
              </div>
            </div>`,
    sale = `
          <div class="col-sm-4">
            <div class="panel panel-danger" >
              <div class="panel-heading text-uppercase"><b id="nameId${count}">${item.product_name}</b></div>
              <div class="panel-body">
                <div id="imgId${count}" data-toggle="modal" data-target="#myModal${count}">${item.product_image}</div>
              </div>
              <div class="panel-footer text-danger">
                <b>Prise: <sup><del id="priseId${count}">${item.price}</del></sup> 
                <i id="prisesaleId${count}">${item.lastprice()}</i> €</b>
                <span class="pull-right" id="saleId${count}">sale ${item.discount * 100} %</span>
              </div>
            </div>
          </div>`,
    modalSale = `
        <div class="modal fade" id="myModal${count}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel${count}">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel${count}">${item.product_name}</h4>
              </div>
              <div class="modal-body">
                ${item.product_image}
                
                <table class="table text-left">
                <tr>
                  <th><b>Type: </b></th>
                  <th><b>Is Online: </b></th>
                  <th><b>Size: </b></th>
                  <th><b>In stock: </b></th>
                </tr>
                <tr>
                  <td>${item.product_type}</td>
                  <td>${item.date_of_add}</td>
                  <td>${item.size}</td>
                  <td>${item.quantity}</td>
                </tr>
                <tr>
                  <th><b>Made in: </b></th>
                  <th><b>End sale: </b></th>
                  <th><b>Color: </b></th>
                  <th><b>Sale: </b></th>
                </tr>
                <tr>
                  <td>${item.manufacture_country}</td>
                  <td>${item.date_of_expire}</td>
                  <td>${item.color}</td>
                  <td>${item.discount * 100} %</td>
                </tr>
                <tr>
                  <th colspan="4">Description:</th>
                </tr>
                <tr>
                  <td colspan="4"><p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ratione porro, id ab laudantium aliquam? Deserunt et suscipit quasi voluptatum ratione libero aut a ex modi dolores, accusantium eos magnam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique molestias sapiente aperiam neque illum ducimus maxime ratione voluptate quae, vel voluptatum consequuntur eos, sequi, fugiat voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ratione porro, id ab laudantium aliquam? Deserunt et suscipit quasi voluptatum ratione libero aut a ex modi dolores, accusantium eos magnam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique molestias sapiente aperiam neque illum ducimus maxime ratione voluptate quae, vel voluptatum consequuntur eos, sequi, fugiat voluptates.</p></td>
                </tr>
                </table>
              </div>
              <div class="modal-footer">
                <b style="margin-right: 10px;">Prise: <sup><del>${item.price}</del></sup> 
                <i>${item.lastprice()}</i> € </b>
                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close" onclick="addItemToCart(${count})">add to Cart</button>
              </div>
            </div>
          </div>
        </div>`,
    modalNosale = `
        <div class="modal fade" id="myModal${count}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel${count}">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel${count}">${item.product_name}</h4>
              </div>
              <div class="modal-body">
                ${item.product_image}
                
                <table class="table text-left">
                <tr>
                  <th><b>Type: </b></th>
                  <th><b>Is Online: </b></th>
                  <th><b>Size: </b></th>
                  <th><b>In stock: </b></th>
                </tr>
                <tr>
                  <td>${item.product_type}</td>
                  <td>${item.date_of_add}</td>
                  <td>${item.size}</td>
                  <td>${item.quantity}</td>
                </tr>
                <tr>
                  <th><b>Made in: </b></th>
                  <th><b>End sale: </b></th>
                  <th colspan="2"><b>Color: </b></th>
                </tr>
                <tr>
                  <td>${item.manufacture_country}</td>
                  <td>${item.date_of_expire}</td>
                  <td colspan="2">${item.color}</td>
                </tr>
                <tr>
                  <th colspan="4">Description:</th>
                </tr>
                <tr>
                  <td colspan="4"><p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ratione porro, id ab laudantium aliquam? Deserunt et suscipit quasi voluptatum ratione libero aut a ex modi dolores, accusantium eos magnam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique molestias sapiente aperiam neque illum ducimus maxime ratione voluptate quae, vel voluptatum consequuntur eos, sequi, fugiat voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ratione porro, id ab laudantium aliquam? Deserunt et suscipit quasi voluptatum ratione libero aut a ex modi dolores, accusantium eos magnam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique molestias sapiente aperiam neque illum ducimus maxime ratione voluptate quae, vel voluptatum consequuntur eos, sequi, fugiat voluptates.</p></td>
                </tr>
                </table>
              </div>
              <div class="modal-footer">
                <b style="margin-right: 10px;">Prise: <i>${item.lastprice()}</i> € </b>
                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close" onclick="addItemToCart(${count})">add to Cart</button>
              </div>
            </div>
          </div>
        </div>`
  ]

  

  if (item.discount == 0) {
    containerID.innerHTML += displayDIV[0];
    modalIdAll.innerHTML += displayDIV[3];
  }

  else {
    containerID.innerHTML += displayDIV[1];
    modalIdAll.innerHTML += displayDIV[2];
  }

  function displaySize(size) {
    return size + ' ';
  }

  function displayColor(color) {
    return color + ' ';
  }

}

function displayCart(item, index) {
  if (index == 0) {
    cartView.innerHTML += item;
  }
  else {
    cartView.innerHTML += item[0] + ' * ' 
                        + products[item[1]].product_name + '<span class="pull-right">' 
                        + products[item[1]].lastprice() + ' €</span><br>';
  }
}

function editCart() {
  cartView.innerHTML = '';
  cart.map(displayCart);
  if (cart.length > 1){
    cartView.innerHTML += '<hr><button class="btn-danger" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onclick="goToCart()">go to cart</button>';
  }
}

function addItemToCart(item) {
  itemCount++;
  cartItem.innerHTML = itemCount;
  //console.log(itemCount)
  var x = cart.length; //1
  //console.log(x)

  // console.table(cart)
  if (x == 1) {// cart array
    cart[0] = '';
    cart.push([1,
      item]);
  }

  else {
    let checkNum = 0;
    for (let i = 1; i < x; i++) {
      if (cart[i][1] == item) { // true //one time if i have the same item 
        // console.log(cart[i][1]);
        checkNum++;
        cart[i][0]++;
        break;
      }
    }
    if (checkNum == 0) {
      cart.push([1,
        item]);
    }
  }
  //console.table(cart)
  editCart();
}

function delItem(i) {
  itemCount--;
  if (itemCount == 0)
    cart = ['You have 0 items in the cart'];

  else {
    if (cart[i][0] == 1) {
      cart.splice(i, 1);
    }
    else {
      cart[i][0]--;
    }
  }

  cartItem.innerHTML = itemCount;
  editCart();
  goToCart();

}

function addMoreItem(i){
  cart[i][0]++;
  itemCount++;
  cartItem.innerHTML = itemCount;
  editCart();
  goToCart();
}

function goToCart(){
  categoryBar.innerHTML ='';
  containerID.innerHTML = `
  <div class="table-responsive">
    <h1>Your Cart:</h1><br>
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="col-sm-1"></th>
          <th>Products</th>
          <th class="col-sm-1 text-center">Price</th>
        </tr>
      </thead>
      <tbody id="goToCartID">
      </tbody>
    </table>
  </div>`;
  cart.map(displayCartPage);
  displayCartPageAddSum();
}

function displayCartPage(item, index, arr){
  //console.log(arr.length)
  if (arr.length == 1) {
    goToCartID.innerHTML += `
    <tr>
      <td colspan="3"><h3>${item}</h3></td>
    </tr>`;
  }
  else {
    if (index == 0){}
    else {
      goToCartID.innerHTML += `
        <tr>
          <td>${index}</td>
          <td><div style="width: 25%; float: left">${products[item[1]].product_image}</div>
              <div style="width: 75%; float: left">
                  <h3>${products[item[1]].product_name}</h3>
                  <div class="pull-left">
                    Delivery 2-3 business days after dispatch<br>
                    <b>Price: </b>${products[item[1]].lastprice()} €
                  </div> 
                  <div class="pull-right"><b>Quantity: </b>
                  <button class=" btn-success glyphicon glyphicon-plus" onclick="addMoreItem(${index})"></button>
                   <span class="" onclick="delItem(${index})"> &nbsp ${item[0]}  &nbsp </span> 
                  <button class=" btn-danger glyphicon glyphicon-minus" onclick="delItem(${index})"></button>
                  </div>
                  </td></div>
          <td class="text-right">${(item[0] * products[item[1]].lastprice()).toFixed(2)} €</td>
        </tr>`;
    }
  }
}

function displayCartPageAddSum(){
  if (cart.length == 1) {
    containerID.innerHTML += `
    <div class="table-responsive">
      <table class="table">
      <tr>
        <th></th>
        <th class="col-sm-2">Order Total :</th>
        <th class="col-sm-1 text-right">${(0).toFixed(2)} €</th>
      </tr>
      </table>
    </div>`;
  }
  else {
    let totalPriceCart = 0;
    for (let i = 1; i<cart.length; i++){
      totalPriceCart = totalPriceCart +Number((cart[i][0] * products[cart[i][1]].lastprice()).toFixed(2));
    }
    var postagePacking, vat;
    postagePacking = 4.99;
    vat = postagePacking + totalPriceCart;
    vat = vat * 19 / 119;
        containerID.innerHTML += `
        <div class="table-responsive ">
          <table class="table">
              <tr>
                <th></th>
                <th class="col-sm-2">Total items (${itemCount}) :</th>
                <th class="col-sm-1 text-right">${totalPriceCart.toFixed(2)} €</th>
              </tr>
              <tr>
              <th style="border: none;"></th>
                <th class="col-sm-2">Postage & Packing :</th>
                <th class="col-sm-1 text-right">${postagePacking.toFixed(2)} €</th>
              </tr>
                <th style="border: none;"></th>
                <th class="col-sm-2">Included VAT :</th>
                <th class="col-sm-1 text-right">${vat.toFixed(2)} €</th>
              </tr>
              <tr>
                <th style="border: none;"></th>
                <th class="col-sm-2">Order Total :</th>
                <th class="col-sm-1 text-right">${(totalPriceCart + 4.99) .toFixed(2)} €</th>
              </tr>
          </table>
        </div>`;
      
  }
}
