// Create an object of products as:
// - product id
// - product name
// - product price
// - product image
// Now, make an promise which can check the product price and give discounted price:
// - first from user input u can choose product by name as select option
// - than a function will receive product info or id and find it inside object, than it will check price
// - if the price is more than 500 euro than he will give discount of 5% and show new price
// - in User Interface the result will show product data, real price and discounted price
// - Use promise chain to show product info () and discounted price() as resolve function

let products = [
    {
        productId: 1,
        product_name: 'face-shield',
        product_price: '10',
        product_image: '<img src="Face-Shield.png" alt="pic" class="card-img-top">'
    },
    {
        productId: 2,
        product_name: 'Drone Camera',
        product_price: '500',
        product_image: '<img src="selfiDrone.jpg" alt="pic" class="card-img-top">'
    },
    {
        productId: 3,
        product_name: 'Dell-xps15',
        product_price: '1500',
        product_image: '<img src="dell-xps15.webp" alt="pic" class="card-img-top" height="360">'
    }
];
// global promise
let p2 = new Promise(function (resolve, reject) {
    resolve(products);
    reject('This product has a fixed price');
});
function callPromise() {
    p2.then(showAllProducts)
        .then(checkPrice)
        .catch(message=>{productID.innerHTML =message})
}


function showAllProducts(products) {
    productID.innerHTML =' ';
    products.map(result);
    function result(item) {
        productID.innerHTML += `        
        <div class="card">
            ${item.product_image}
            <div class="card-body">
            <h5 class="card-title" id="productId">${item.product_name} </h5>
           <p class="card-text"><ul><li>id=${item.productId}</li><li>name=${item.product_name}</ li><li>price=${item.product_price}€</li></ul></p>
           <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
           </div>
        </div>`
    }
}

function checkPrice() {
    let proName=selectID.value;
    discountedPriceID.innerHTML = ' ';
    console.log(proName);
    //let p = new Promise((resolve, reject) => {
    products.map(searchInfo);
    function searchInfo(item) {
        if (item.product_name == proName) {
            let priceP = eval(item.product_price);
            console.log(proName, priceP)
            if (priceP >= 500) {
                let discountPrice = Math.floor(priceP) * 0.95;
                console.log('discountPrice' + discountPrice)
                document.getElementById('discountedPriceID').innerHTML = `        
                            <div class="container">
                             ${item.product_image}
                              <div class="card-body">
                               <h5 class="card-title" id="productId">${item.product_name} </h5>
                               <p class="card-text"><ul><li>id=${item.productId}</li><li>name=${item.product_name}</ li><li>price=<del>${item.product_price}€</del></li>
                               <li>discounted price=${discountPrice} € </li>
                               </ul></p>
                               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                              </div>
                            </div>`

            }
            else {
                discountedPriceID.innerHTML = `<h1>This product has a fixed price</h1><br>
                        <div class="container">
                        ${item.product_image}
                         <div class="card-body">
                          <h5 class="card-title" id="productId">${item.product_name} </h5>
                          <p class="card-text"><ul><li>id=${item.productId}</li><li>name=${item.product_name}</ li><li>price=${item.product_price}€</li>
                          <li>discounted price:No discount for this product</li>
                          </ul></p>
                          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                         </div>
                       </div>`;

            }
        }
    }




}







