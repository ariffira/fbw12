let products = [

    {
        id: 100,
        product_name: 'PINE - Jeans Tapered Fit',
        Price: 50,
        product_image: 'https://img01.ztat.net/article/WE/B2/2G/03/WK/11/WEB22G03W-K11@5.jpg?imwidth=1800',
    },
    {
        id: 200,
        product_name: 'SALA THIN STRIPES - Hemd',
        Price: 119.95,
        product_image: 'https://img01.ztat.net/article/DE/L2/2F/00/3K/11/DEL22F003-K11@4.1.jpg?imwidth=1800',
    },
    {
        id: 300,
        product_name: 'ARC SANDAL - Riemensandalette',
        Price: 500.50,
        color: ['White', 'Black'],
        product_image: 'https://img01.ztat.net/article/DO/21/5G/00/8A/11/DO215G008-A11@11.jpg?imwidth=1800',
    },
    {
        id: 101,
        product_name: 'THEODORE TROUSER - Stoffhose',
        Price: 550.45,
        color: ['Black', 'Blue'],
        product_image: 'https://img01.ztat.net/article/F1/42/2E/01/DQ/11/F1422E01D-Q11@9.2.jpg?imwidth=1800',
    },
    {
        id: 400,
        product_name: 'VALENCIA - Poloshirt',
        Price: 89.95,
        color: ['White', 'Black', 'Red'],
        product_image: 'https://img01.ztat.net/article/NO/62/2P/00/PC/11/NO622P00P-C11@7.jpg?imwidth=1800',
    },
    {
        id: 201,
        product_name: 'VARBERG LEAVES - Hemd',
        Price: 89.95,
        color: ['Orang'],
        product_image: 'https://img01.ztat.net/article/DE/L2/2D/00/8M/11/DEL22D008-M11@4.jpg?imwidth=1800',
    }
]

function checkPrice(cPrice) {
    let initPrice = cPrice;
    let price = new Promise(function(resolve, reject) {

        if (i.price > 500) resolve(cPrice)
        else reject(cPrice)
    })



    function desc(cPrice) {

        pPrice.innerHTML = cPrice * 0.95;
    }

    function noDesc(cPrice) {
        pPrice.innerHTML = cPrice;
    }


}

function search() {
    document.getElementById("view").innerHTML = '';
    products.map(productChose);
}

function productChose(item) {
    //console.log(item);
    let desVal = item.Price;
    switch (document.getElementById("sel1").value) {
        case item.product_name:
            if (item.Price > 500) {
                view.innerHTML +=
                    `
            <div class="col-lg-4 col-md-6 col-12">
                <div class="card border-0">
                    <span class="price img-zoom"  id="priceColor">
                        <img class="rounded img-fluid" src="${item.product_image}">
                       <span id="pPrice"><b> ${checkPrice(item.price)} </b></span>
                       
                    </span>
                </div>
                <div class="card border-0">
                    <div class="card-body mt-n13 bg-white mr-6 rounded-right p-4">
                        <a href="#">
                            <h4 class="mb-3">${item.product_name}</h4>
                        </a>
                        
                        
                    </div>
                </div>
            </div>
        `;
            } else {
                view.innerHTML +=
                    `
        <div class="col-lg-4 col-md-6 col-12">
            <div class="card border-0">
                <span class="price img-zoom"  id="priceColor">
                    <img class="rounded img-fluid" src="${item.product_image}">
                   <b> ${item.Price} </b>
                   
                </span>
            </div>
            <div class="card border-0">
                <div class="card-body mt-n13 bg-white mr-6 rounded-right p-4">
                    <a href="#">
                        <h4 class="mb-3">${item.product_name}</h4>
                    </a>
                    
                    
                </div>
            </div>
        </div>
    `;
            }
            break;

        case 'All':
            products.map(productList);
            break;

        default:
            break;
    }
}




products.map(productList);

function productList(item) {
    //console.log(item);

    view.innerHTML +=
        `
        <div class="col-lg-4 col-md-6 col-12">
            <div class="card border-0">
                <span class="price img-zoom"  id="priceColor">
                    <img class="rounded img-fluid" src="${item.product_image}">
                   <b> ${item.Price} </b>
                   
                </span>
            </div>
            <div class="card border-0">
                <div class="card-body mt-n13 bg-white mr-6 rounded-right p-4">
                    <a href="#">
                        <h4 class="mb-3">${item.product_name}</h4>
                    </a>
                    
                    
                </div>
            </div>
        </div>
    `;
}