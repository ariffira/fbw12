// Step 01:
// create html, js and css files and connect them and test it. First create top menu , main menu and footer
// Step 02:
// inside JS file create an Array which contains minimum 10 objects as below structure:
// let products = [ { object },{object},......]
// Each object should contain below information:
// - id
// - product_name
// - product_type
// - price
// - date_of_add
// - quantity
// - date_of_expire
// - manufacture_country
// - size Array which display sizes
// - color Array which display how many colors available for this products
// - product_image
// -discount price

// Step 03:
// Now use map() or forEach method to display all this 10 products in html UI
// Step 04:
// Use Bootstrap 4 and its Card to display it nicely and change the design and color using your CSS also.
// show these info on UI as:
// - Product picture in a Card with its price, type, discount, and other info
// - a button called "Order" when people click and get a message as alert from bootstrap which will show you ordered 1 product
// - So collect product numbers that user clicks. if five product user click 5 should show on top menu
// - hover effect or any effect must be used by ur css
// Step 05:
// Create a JS function which can find discount price as below formula
// price*discount_ratio = discount_price
"use strict";
let product = [
  {
    id: '1aa',
    product_name: 'iphone',
    product_type: 'iphone pro',
    price: '1070$',
    date_of_add: '09.06.2020',
    quantity: '6',
    date_of_expire: '5 yeares',
    manufacture_country: 'USA',
    size: ['64GB', '128GB', '256GB'],
    color: ['grey', 'gold', 'rose', 'silver'],
    product_image: '<img src="/picture/iphone-pro11.jpg" id="proImage">',
    discount_price: '10%',
    clickMe:function(){
      this.product_image.style.border='4px solid red'; 
      // this.product_image.style.transition='width 100px';
    }
  },
  {
    id: '2bb',
    product_name: 'jeans',
    product_type: 'clothes',
    price: '47$',
    date_of_add: '09.06.2020',
    quantity: '5',
    date_of_expire: '3 yeares',
    manufacture_country: 'Canada',
    size: ['S', 'L', 'M'],
    color: ['blue', 'black'],
    product_image: '<img src="/picture/jeans.webp" id="proImage">',
    discount_price: '10%'
  },
  {
    id: '3cc',
    product_name: 'black opium',
    product_type: 'parfom',
    price: '38$',
    date_of_add: '09.06.2020',
    quantity: '10',
    date_of_expire: '2 yeares',
    manufacture_country: 'France',
    size: ['30ml', '50ml', '100ml'],
    color: ['black', 'silver'],
    product_image: '<img src="/picture/parfom.png" id="proImage">',
    discount_price: '20%'
  },
  {
    id: '4dd',
    product_name: 'biotin',
    product_type: 'shampoo',
    price: '7.99$',
    date_of_add: '09.06.2020',
    quantity: '30',
    date_of_expire: '5 yeares',
    manufacture_country: 'France',
    size: ['335ml', '550ml'],
    color: ['purple', 'silver'],
    product_image: '<img src="/picture/biotin.jpg" id="proImage">',
    discount_price: '15%'
  },
  {
    id: '5ee',
    product_name: 'HP Notebook',
    product_type: 'laptop hp',
    price: '404,59$',
    date_of_add: '09.06.2020',
    quantity: '3',
    date_of_expire: '12 yeares',
    manufacture_country: 'France',
    size: ['(B 37cm', 'T 24cm', 'H 17cm'],
    color: ['black'],
    product_image: '<img src="/picture/p-laptop.webp" id="proImage">',
    discount_price: '10%'
  },
  {
    id: '6ff',
    product_name: 'HP Notebook',
    product_type: 'laptop',
    price: '404.59$',
    date_of_add: '09.06.2020',
    quantity: '3',
    date_of_expire: '12 yeares',
    manufacture_country: 'France',
    size: ['(B 37cm', 'T 24cm', 'H 17cm'],
    color: ['black'],
    product_image: '<img src="/picture/watchs.webp" id="proImage" >',
    discount_price: '10%'
  },

];
function showArray(arr) {
  let list = ' ';
  for (let i in arr) {
    list += `<li>${arr[i]}</li>`
  }
  return list;
}
product.map(showInfo);

function showInfo(item, index) {
  // console.log(item);
  // console.log(index);
  productInfo.innerHTML += `
  <div class="col-sm-4">
    <div id="goTo${index}">
      <div class="card h-100">
       <a href="#"> ${item.product_image} </a>
       <div class="card-body">
       <h4 class="card-title">
        <a href="#">${item.product_name}</a>
       </h4>
       <h5>price is:${item.price}</h5>
       <h4>discount_price :${item.discount_price}</h4>
       <p class="card-text"><h6>Product id:${item.id}</h6><h6>product-type:${item.product_type}</h6><h6>date_of_add:${item.date_of_add}</h6>
       <h6>date_of_expire:${item.date_of_expire}</h6><h6>manufacture_country:${item.manufacture_country}</h6><ul>size:${showArray(item.size)}</ul><ul>color:${showArray(item.color)}</ul>
       </p>
        </div>
        <div class="card-footer">
          <small class="text-muted cardText">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          <button type="submit" class="btn btn-primary" onclick="addItemToCart(${index})" ondblclick="hideCart()">Order</button>
        </div>
      </div>
    </div>

  <hr>
  </div>
    `
};

let itemCount = 0;
let cart = ['You have nothing in the cart']
editCart();
function addItemToCart(item) {
  if (itemCount==0){
    localStorage.clear();
  }
  itemCount++;
  cartItem.innerHTML = itemCount;
  localStorage.setItem("quanity", itemCount); 
  localStorage.setItem(`localPrice${itemCount}`, product[item].price);
  localStorage.setItem(`productName${itemCount}`, product[item].product_name); 

  //console.log(itemCount)
  var i = cart.length;
  console.log(item);
  cart.push(product[item].product_name + `<button id="trash"class=" btn-danger float-right
  " onclick="delItem(${i})"><svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button><br><br>`)
  console.table(cart)
  cart[0] = '';
  editCart();

}

function editCart() {
  cartInfo.innerHTML = '';
  cart.map(displayCart);
}
function displayCart(item) {
  cartInfo.innerHTML += item; 
}
function hideCart() {
  if (cartInfo.style.display == "block") {
    cartInfo.style.display = "none";
  } else {
    cartInfo.style.display = "block";
  }
}

function searchProduct(item) {
  console.log(item);
  //console.log(typeof item );
  for (let i in product) {
   // console.log(product[i].product_type);
    if (item === product[i].product_type) {
      searchInfo.innerHTML = `<a href="#goTo${i}" style="background-color:lightblue;" onclick="hideSearch()">Go</a>`;
      console.log(product[i].product_type);
      break;
    }
  }
  hideSearch();
}
  function delItem(i) {
  itemCount--;
  if (itemCount == 0)
    cart = ['You have nothing in the cart'];

  else {
    cart.splice(i, 1);
  }
  editCart();
  cartItem.innerHTML = itemCount;
}
function hideSearch() {
  if (searchInfo.style.display == "block") {
    searchInfo.style.display = "none";
  } else {
    searchInfo.style.display = "block";
  }
}

var cartItems=cartInfo.innerHTML;

