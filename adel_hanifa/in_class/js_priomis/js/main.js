/*
  JS Promise
  - use keyword new Promise();
  - Promise(resolve, reject)
  - resolve(1st arg): when successful then callback resolve
  - reject(2nd arg): when failed then callback reject
  - promise always give back something
*/


/* let databaseResult = 'User01';

let promise2 = new Promise(function (success, fail) {
  //something is coming, so wait for 2 seconds
  if (databaseResult == 'User01') {
    success('User01');
  }
  else {
    fail('No user');
  }
});
//then:success, fail: catch

promise2.then(function (result) {
  alert('Successfull '+result);
}).catch(function (error) {
  alert(error);
}); */


//// free code camp ex
/* let condition = false;  

const myPromise = new Promise((resolve, reject) => {    

  if(condition) {    
      resolve('Promise is resolved successfully.');  
  } else {    
      reject('Promise is rejected');  
  }
});

myPromise.then((message) => { 
  console.log(message);
}).catch((message) => { 
  console.log(message);
}); */



/////
function promiseFun(married) {
  // create promise
  let willGetMarried = new Promise(function (resolve, reject) {
    if (married) {
      let marriageTools = {
        dress: 'Suit, tie, pant',
        money: ' 5000 euro',
        ring: 'Diamond'
      }
      resolve(marriageTools);//Marriage is done
    } else {
      let x = 'He is not Ready'
      reject(x);//Marriage is failed
    }
  });

  willGetMarried
    .then((marriageTools) => {
      yesFun(marriageTools)
    })
    .catch((problem) => {
      noFun(problem);
    });
}

function yesFun(marriageTools) {
  resultId.innerHTML = `
   <img class="img" src="img/yes.png">

   <ul> My Name is Paolo. If i get married I will get these:
   <li>${marriageTools.dress}</li>
   <li> ${marriageTools.money}</li>
   <li> ${marriageTools.ring}</li>
   </ul>
   `;
}

function noFun(problem) {
  resultId.innerHTML = `<img class="img" src="img/no.png"><span>${problem}</span>`;
}



////  ex 22

let producktArry = [
  {
    name : 'Side-by-Side, Edelstahl, 609 ℓ',
    info : ['Space Max','Twin Cooling+™','Eis- und Wasserspender','No Frost+'],
    img : '001.png',
    price : 1299,
  },
  {
    name : 'Waschmaschine, SchaumAktiv, 8 kg',
    info : ['SchaumAktiv-Technologie','Diamond Pflegetrommel','Energieeffizienzklasse A+++','8kg Kapazität'],
    img : '002.png',
    price : 479,
  },
  {
    name : '65" UHD TV TU7079',
    info : ['Crystal Display','Crystal Prozessor 4K','HDR','Game Enhancer'],
    img : '003.png',
    price : 799,
  }
];

producktArry.map(function (item, index) {
  producktChoiseID.innerHTML += `
  <option value="${index}">${item.name}</option>
  `;

  producktDisplayID.innerHTML +=`
  <div class="producktDisplayClass">
    <img src="img/${item.img}">
    <h3>${item.name}</h3>
    <ul>${item.info.map(function (itemInfo) {return `<li>${itemInfo}</li>`}).join(' ')}</ul>
    <span id="saleNosale">Price: ${item.price},- €</span>
  </div><br>
  `;

});

function producktDisplayFun(i){
  
  
  function displayThisItem (){
    console.log(producktArry[i])
    producktDisplayID.innerHTML =`
    <div class="producktDisplayClass">
      <img src="img/${producktArry[i].img}">
      <h3>${producktArry[i].name}</h3>
      <ul>${producktArry[i].info.map(function (item) {return `<li>${item}</li>`}).join(' ')}</ul>
      <span>${priceData}</span>
    </div>
    `;
  }

  function checkDiscount(x){
    console.log('price:' ,x)
    if (x > 500){
      let salePrice = Math.floor( x * 0.95 )
      return priceData = `Sale Price:<sup><del>${x}</del></sup> ${salePrice},- €`;
    }
    else {
      return priceData = `Price: ${x},- €`;
    }

  }


  let discountPrice = new Promise(function (resolve, reject) {
      resolve(producktArry[i].price);
      reject('No info for this item');
  });
  

  discountPrice
  .then((x) => {checkDiscount(x)})
  .then(displayThisItem)
  .catch((y) => {console.log(y)})

}



function testFun(numtest){

  function getSqure(x){ 
    var y = x;
    x = x*x;
    console.log('the Number before is : ' ,y , ' the Squre  Number is :' ,x)
    return x;
  }

  function getAdd(x){ 
    var y = x;
    x = x+x;
    console.log('the Number before is : ' ,y , ' the Number * 2 is :' ,x)
    return x;
  }

  function getSub(x){ 
    var y = x;
    x = x - 5;
    console.log('the Number before is : ' ,y , ' the Number - 5 is :' ,x)
    return x;
  }

  function getDiv(x){ 
    var y = x;
    x = x / 3;
    console.log('the Number before is : ' ,y , ' the Number / 3 is :' ,x)
    return x;
  }

  function getOddEven(x){ 
    if (x % 2 == 0)
        console.log('the Number  is : ' ,x , ' it is even number')
    else
        console.log('the Number  is : ' ,x , ' it is odd number')
    return x;
  }

  let testNum = new Promise(function (resolve, reject) {
      resolve(numtest);
      reject('No info for this item');
  });
  

  testNum
  .then(getSqure)
  .then(getAdd)
  .then(getOddEven)
  .then(getSub)
  .then(getDiv)
  .then(getOddEven)
  .then(getSqure)
  .catch((y) => {console.log(y)})

}