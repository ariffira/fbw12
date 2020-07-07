// console.log(1)

let products = [

        {
            id: 100,
            product_name: 'PINE - Jeans Tapered Fit',
            product_type: 'Pants',
            price: {
                origenal: 50,
                discount_ratio: 50
            },
            date_of_add: '04.06.2020',
            quantity: 20,
            date_of_expire: '',
            manufacture_country: 'Germany',
            size: [28, 29, 30, 31, 32, 33, 34, 35, 36],
            color: ['Blue', 'Black', 'Gray'],
            product_image: 'https://img01.ztat.net/article/WE/B2/2G/03/WK/11/WEB22G03W-K11@5.jpg?imwidth=1800',
            fev: 0,
            cart: 0
        },
        {
            id: 200,
            product_name: 'SALA THIN STRIPES - Hemd',
            product_type: 'Shirt',
            price: {
                origenal: 119.95,
                discount_ratio: 0
            },
            date_of_add: '08.06.2020',
            quantity: 40,
            date_of_expire: '',
            manufacture_country: 'Italy',
            size: ['XS', 'S', 'M', 'L', 'XLL', 'XLL'],
            color: ['Blue', 'Black'],
            product_image: 'https://img01.ztat.net/article/DE/L2/2F/00/3K/11/DEL22F003-K11@4.1.jpg?imwidth=1800',
            fev: 0,
            cart: 0
        },
        {
            id: 300,
            product_name: '8092 ARC SANDAL - Riemensandalette',
            product_type: 'SANDAL',
            price: {
                origenal: 139.95,
                discount_ratio: 0
            },
            date_of_add: '07.06.2020',
            quantity: 40,
            date_of_expire: '',
            manufacture_country: 'vietnam',
            size: ['39', '40', '41', '42', '43', '44', '45'],
            color: ['White', 'Black'],
            product_image: 'https://img01.ztat.net/article/DO/21/5G/00/8A/11/DO215G008-A11@11.jpg?imwidth=1800',
            fev: 0,
            cart: 0
        },
        {
            id: 101,
            product_name: 'THEODORE TROUSER - Stoffhose',
            product_type: 'Pants',
            price: {
                origenal: 194.95,
                discount_ratio: 20
            },
            date_of_add: '08.06.2020',
            quantity: 15,
            date_of_expire: '',
            manufacture_country: 'Italy',
            size: ['46', '48', '50', '52', '54', '56'],
            color: ['Black', 'Blue'],
            product_image: 'https://img01.ztat.net/article/F1/42/2E/01/DQ/11/F1422E01D-Q11@9.2.jpg?imwidth=1800',
            fev: 0,
            cart: 0
        },
        {
            id: 400,
            product_name: 'VALENCIA - Poloshirt',
            product_type: 'T-Shirt',
            price: {
                origenal: 89.95,
                discount_ratio: 20
            },
            date_of_add: '12.03.2020',
            quantity: 30,
            date_of_expire: '',
            manufacture_country: 'Italy',
            size: ['XS', 'S', 'M', 'L', 'XLL', 'XLL'],
            color: ['White', 'Black', 'Red'],
            product_image: 'https://img01.ztat.net/article/NO/62/2P/00/PC/11/NO622P00P-C11@7.jpg?imwidth=1800',
            fev: 0,
            cart: 0
        },
        {
            id: 201,
            product_name: 'VARBERG LEAVES - Hemd',
            product_type: 'Shirt',
            price: {
                origenal: 89.95,
                discount_ratio: 50
            },
            date_of_add: '12.03.2020',
            quantity: 30,
            date_of_expire: '',
            manufacture_country: 'Italy',
            size: ['XS', 'S', 'M', 'L', 'XLL', 'XLL'],
            color: ['Orang'],
            product_image: 'https://img01.ztat.net/article/DE/L2/2D/00/8M/11/DEL22D008-M11@4.jpg?imwidth=1800',
            fev: 0,
            cart: 0
        }
    ],
    cart = 0,
    cartProducts = [],
    fevo = 0,
    fevProducts = [];

// NAVBAR

// Cart
function cartCheck(value, item) {
    if (value == 0) {

        return document.getElementById(products[item].product_name).innerHTML = `<button type="button" value="${products[item].cart}" class="btn btn-success" id="toCart" onclick="addToCart(${item})"><i class="fas fa-cart-plus"></i>Add to cart</button>`;
    } else {

        return document.getElementById(products[item].product_name).innerHTML = `<button type="button" value="${products[item].cart}" class="btn btn-danger" id="toCart" onclick="addToCart(${item})"><i class="fas fa-cart-plus"></i>Remove from cart</button>`;
    }
}

function addToCart(item) {
    // console.log(products[item])
    if (products[item].cart == 0) {
        products[item].cart++;
        cart++;
        cartProducts.push(products[item]);
        cartCheck(products[item].cart, item);
        // document.getElementById(products[item].product_name).innerHTML = `<button type="button" value="${item.cart}" class="btn btn-danger" id="toCart" onclick="addToCart(${item})"><i class="fas fa-cart-plus"></i>Remove from cart</button>`;
    } else {
        products[item].cart--;
        cart--;
        cartProducts.splice(item, 1);
        cartCheck(products[item].cart, item);
        // document.getElementById(products[item].product_name).innerHTML = `<button type="button" value="${item.cart}" class="btn btn-success" id="toCart" onclick="addToCart(${item})"><i class="fas fa-cart-plus"></i>Add to cart</button>`
    }
    // console.log(cartProducts);
    document.getElementById('cart').innerHTML = `<button type="button" class="btn nav-link" onclick="cartSite()"><i class="fas fa-shopping-cart"></i> ${cart}</button>`;


    // document.getElementById('toCart').innerHTML =
}



function cartSite() {
    view.innerHTML = '';
    cartProducts.map(productList);
}


// Favorite
function fevClick(item) {
    if (products[item].fev == 0) {
        products[item].fev++;
        fevo++;
        fevProducts.push(products[item]);
        console.log(fevProducts)
            //console.log(products[item].fev)
        document.getElementById(products[item].id).innerHTML = fev(item);
        // document.getElementById(products[item].id).innerHTML = `<i class = "fas fa-star" > </i>`;

    } else {

        products[item].fev--;
        fevo--;

        fevProducts.splice(products[item], 1);
        console.log(fevProducts)

        console.log(products[item])
        document.getElementById(products[item].id).innerHTML = `<i class = "far fa-star" > </i>`;

    }
    document.getElementById('fev').innerHTML = `<button type="button" class="btn nav-link" onclick="fevSite()"><i class = "fas fa-star" > </i> ${fevo}</button>`;
}

function fev(value) {
    if (value == 0) {

        return `<i class="far fa-star"></i>`;
    } else {

        return `<i class="fas fa-star"></i>`;
    }
}

function fevSite() {
    view.innerHTML = '';

    fevProducts.map(productList);
}



// Search
function search() {
    document.getElementById("view").innerHTML = '';
    products.map(productChose);

}

function productChose(item, count) {
    //console.log(item);
    switch (document.getElementById("sel1").value) {
        case item.product_type:
            view.innerHTML +=
                `
            <div class="col-lg-4 col-md-6 col-12">
                <div class="card border-0">
                    <span class="price img-zoom"  id="priceColor">
                        <img class="rounded img-fluid" src="${item.product_image}">
                        ${priceInf(item.price)} 
                        <button type="button" value="${item.fev}" class="btn" id="${item.id}" onclick="fevClick(${count})">${fev(item.fev)}</button>
                    </span>
                </div>
                <div class="card border-0">
                    <div class="card-body mt-n13 bg-white mr-6 rounded-right p-4">
                        <a href="#">
                            <h4 class="mb-3">${item.product_name}</h4>
                        </a>
                        <div class="dropdown">
                            <label for="sel2">Color:</label>
                                <select class="form-control btn btn-primary " id="sel1" name="sellist1">
                                    ${getList(item.color)}
                                </select>
                        </div>
                        <br>
                        <div class="dropdown">
                            <label for="sel2">Size:</label>
                            <select class="form-control btn btn-secondary " id="sel1" name="sellist2">
                                 ${getList(item.size)}
                            </select>
                        </div>
                        <a href="#" class="btn-primary-link">Read more</a>
                        <button type="button" value="" class="btn btn-success" id="toCart" onclick="addToCart(${count})"><i class="fas fa-cart-plus"></i>Add to cart</button>
                    </div>
                </div>
            </div>
        `;
            break;

        case 'All':
            products.map(productList);
            break;

        default:
            break;
    }
}





// home Page
function homePage() {
    document.getElementById('cart').innerHTML = '';
    document.getElementById('cart').innerHTML = `<button type="button" class="btn nav-link" onclick="cartSite()"><i class="fas fa-shopping-cart"></i> ${cart}</button>`;
    document.getElementById('fev').innerHTML = `<button type="button" class="btn nav-link" onclick="fevSite()"><i class = "fas fa-star" > </i> ${fevo}</button>`;
    view.innerHTML = '';
    products.map(productList);
}

function getList(myArray) {
    let list = '';
    for (let i of myArray) {
        list += `<option class="dropdown-item">${i}</option>`
    }
    return list;
}

// Price Function

function priceInf(price) {
    if (price.discount_ratio == 0)
        return `<b style="color: green;">${price.origenal}€</b>`;
    else {
        return `<b style="color: red;">${price.discount_ratio}%  ${((price.discount_ratio / 100) * price.origenal).toFixed(2)}€</b>`;
    }
}




// Main content


products.map(productList);
document.getElementById('cart').innerHTML = `<button type="button" class="btn nav-link" onclick="cartSite()"><i class="fas fa-shopping-cart"></i> ${cart}</button>`;
document.getElementById('fev').innerHTML = `<button type="button" class="btn nav-link" onclick="fevSite()"><i class = "fas fa-star" > </i> ${fevo}</button>`;

function productList(item, count) {
    //console.log(item);

    view.innerHTML +=
        `
        <div class="col-lg-4 col-md-6 col-12">
            <div class="card border-0">
                <span class="price img-zoom"  id="priceColor">
                    <img class="rounded img-fluid" src="${item.product_image}">
                    ${priceInf(item.price)} 
                    <button type="button" value="${item.fev}" class="btn" id="${item.id}" onclick="fevClick(${count})">${fev(item.fev)}</button>
                </span>
            </div>
            <div class="card border-0">
                <div class="card-body mt-n13 bg-white mr-6 rounded-right p-4">
                    <a href="#">
                        <h4 class="mb-3">${item.product_name}</h4>
                    </a>
                    <div class="dropdown">
                        <label for="sel2">Color:</label>
                            <select class="form-control btn btn-primary " id="sel1" name="sellist1">
                                ${getList(item.color)}
                            </select>
                    </div>
                    <br>
                    <div class="dropdown">
                        <label for="sel2">Size:</label>
                        <select class="form-control btn btn-secondary " id="sel1" name="sellist2">
                             ${getList(item.size)}
                        </select>
                    </div>
                    <a href="#" class="btn-primary-link">Read more</a>
                    
                    <span id="${item.product_name}">

                    </span>
                    
                </div>
            </div>
        </div>
    `;
    cartCheck(item.cart, count)

} { /* <button type="button" value="${item.cart}" class="btn btn-success" id="toCart" onclick="addToCart(${count})"><i class="fas fa-cart-plus"></i>Add to cart</button> */ }