//cartProduct.innerHTML=cartItems;
let cart = [''];
editCart();
let itemNu = localStorage.getItem("quanity");
console.log('I have ' + itemNu + ' products in cart');
//var product = localStorage.getItem(`productName${itemNu}`);
console.log(`localPrice${itemNu}`);
order.innerHTML = itemNu;
cartProduct.innerHTML += `<div style="display:grid;"><a href="index.html">Your Orders</a><br> You have ${itemNu} product(s) in the cart <ol id="priceP"></ol></div>`
// array of prices
let x = itemNu;
for (let i = 1; i <= x; i++) {
  console.log(i);
  cart.push(localStorage.getItem(`productName${i}`), localStorage.getItem(`localPrice${i}`));
  console.log(cart);
  console.log(localStorage.getItem(`productName${i}`) + localStorage.getItem(`localPrice${i}`));

  document.getElementById(`priceP`).innerHTML += '<li>' + localStorage.getItem(`productName${i}`) + localStorage.getItem(`localPrice${i}`) + `<button id="trash" class=" btn-danger float-right 
  " style="margin-left:20rem;"><svg onclick="delItem(${itemNu})" class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button>`+ '</li>';
}


function displayCart(item) {

  let itemNu = localStorage.getItem("quanity");
  console.log(item);

  document.getElementById('cartProduct').innerHTML = ' ';
  for (let i = 1; i <= itemNu; i++) {
    document.getElementById('cartProduct').innerHTML += '<li>' + localStorage.getItem(`productName${i}`) + localStorage.getItem(`localPrice${i}`) + `<button id="trash" class=" btn-danger float-right 
  " style="margin-left:20rem;"><svg onclick="delItem(${itemNu})" class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
 </svg></button>`+ '</li>';

    //cartProduct.innerHTML += item;
    //priceP.innerHTML +=item;
  }
}
function editCart() {
  cartProduct.innerHTML = ' ';
  cart.map(displayCart);
  console.log(cart);
}

let itemCount = itemNu;
function delItem(i) {
  itemCount--;
  if (itemCount == 0) {
    cart = [''];
    order.innerHTML = 0;
    localStorage.setItem(`productName${i}`, ' ');
    localStorage.setItem(`localPrice${i}`, ' ');
    //document.getElementsByClassName('btn-danger')[i].getElementsByClassName.display='none';
    cartProduct.innerHTML = ' ';
  }
  else {
    cart.pop();
    cart.pop();
    console.log(cart);
  }
  editCart();
  order.innerHTML = itemCount;
  // priceP.innerHTML =cart;

}

// total sum
function totalSum() {
  let sum = 0;
  for (let i = 1; i <= itemNu; i++) {
    if (cartProduct.innerHTML == '') {
      total.innerHTML = 0;
    }
    console.log(sum);
    sum = sum + parseInt(localStorage.getItem(`localPrice${i}`));
  }
  total.innerHTML = sum + ' $';
  return sum;
}