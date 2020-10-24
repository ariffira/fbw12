
//creat an array that holds selected items
//calculate and display total order quantity
let orderList = [];
let num = 0, x = false,index=0;
function orderButton(orderItem) {
    console.log(orderItem);
    for (let i = 0; i < orderList.length; i++) {
        if (orderList[i].orderItem == orderItem) {
            x = true;
        }
    }
    console.log(x);
    if (x == false) {
        index++;
        orderList.push({ index,orderItem });
    }
    document.getElementById("cartCount").innerHTML = index;
}
//cart 
//display items in shopping cart
function checkCartF() {
    console.log(orderList)
     cartContainer.innerHTML = '';
    for (let i = 0; i < orderList.length; i++) {
        cartContainer.innerHTML += `<div class="dropdown-item" href="#">${orderList[i].index} ${orderList[i].orderItem}  </div>`;
    }
    console.log('cartCount',cartCount)
   document.getElementById('cartCount').innerHTML= orderList.length;
}
//favorite items
let favoriteList = [];
let favTotal = 0;
let heartColor = 'red';
function addFavorite(id, title) {
    console.log('id',id,'title',title)
    for (let i = 0; i < favoriteList.length; i++) {
        if (favoriteList[i] == title) {
            heartColor = 'white';
            document.getElementById(`favoriteButton_${id}`).style.color = "rgb(128 128 128) ";
            favoriteList.map((item, index) => {
                if (item == title) {
                    favoriteList.splice(index, 1);
                }
            })
            favTotal = favoriteList.length;
            document.getElementById("favoriteCount").innerHTML = favTotal;
        }
    }
    if (heartColor == 'red') {
        document.getElementById(`favoriteButton_${id}`).style.color = "red";
        heartColor = 'red';
        favoriteList.push(title);
        favTotal = favoriteList.length;
        document.getElementById("favoriteCount").innerHTML = favTotal;
    }
    console.log(favoriteList)

}
//display items in fav cart
function checkFavF() {
    favContainer.innerHTML = '';
    for (let i = 0; i < favoriteList.length; i++) {
        favContainer.innerHTML += `<a class="dropdown-item" href="#">${favoriteList[i]}</a>`;
    }
}