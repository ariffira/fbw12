/* let products = [

  {
    id: '0001',
    product_name: 'Adidas Men`s T-Shirt',
    product_type: 'T-Shirts',
    price: 49.99,
    date_of_add: '09.06.2020',
    quantity: '47',
    date_of_expire: '09.07.2020',
    manufacture_country: 'Germany',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Red', 'Blue', 'Green'],
    discount: 0.7
  },
  {
    id: '0002',
    product_name: 'Vaude Men`s Farley Zo IV trousers',
    product_type: 'Trousers',
    price: 66.99,
    date_of_add: '09.05.2020',
    quantity: '20',
    date_of_expire: '--.--.----',
    manufacture_country: 'France',
    size: [46, 48, 50, 52, '<del>54</del>', 56],
    color: ['Black', 'Muddy', 'Tarn'],
    discount: 0
  },
  {
    id: '0003',
    product_name: 'Jack Wolfskin Jasper Flex Jacket',
    product_type: 'Jackets',
    price: 129.99,
    date_of_add: '01.06.2020',
    quantity: '34',
    date_of_expire: '10.07.2020',
    manufacture_country: 'Germany',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Dark Indigo', 'Black', '<del>Lava Red</del>'],
    discount: 0.15
  },
  {
    id: '0004',
    product_name: 'Asics Gt-2000 8 Men`s Running Shoes',
    product_type: 'Shoes',
    price: 117.00,
    date_of_add: '09.05.2020',
    quantity: '87',
    date_of_expire: '--.--.----',
    manufacture_country: 'USA',
    size: [40, 41, '<del>42</del>', 43, 44, 45],
    color: ['White Black', 'Multicolor', 'Blue'],
    discount: 0
  },
  {
    id: '0005',
    product_name: 'Nike Men`s CRW Ft Pullover Sweater',
    product_type: 'Sweaters',
    price: 30.08,
    date_of_add: '01.03.2020',
    quantity: '41',
    date_of_expire: '--.--.----',
    manufacture_country: 'China',
    size: ['S', '<del>M</del>', 'L', 'XL'],
    color: ['Black/White'],
    discount: 0
  },
  {
    id: '0006',
    product_name: 'Under Armour Men`s Classic Fit Cap',
    product_type: 'Caps',
    price: 27.95,
    date_of_add: '09.06.2020',
    quantity: '90',
    date_of_expire: '25.06.2020',
    manufacture_country: 'China',
    size: ['One size fits all'],
    color: ['White', 'Black', 'Blue', '<del>Grey</del>'],
    discount: 0.2
  }
];

let users = [
  {
    username: "AdelHanifa",
    age: 28,
    adminCustomer: true,
    country: 'syria',
    email: 'adel@hanifa.com',
    password: '12345678'
  },
  {
    username: 'HanifaAdel',
    age: 28,
    adminCustomer: false,
    country: 'syria',
    email: 'adel@hanifa.de',
    password: '12345678'
  },

] */



////////////// user table 

let url1 = "https://jsonplaceholder.typicode.com/users/";

fetch(url1)
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    data.map(function (item, index) {
      //console.log(item);
      userTableID.innerHTML += `
    <tr>
        <th><a type="button" href="#" style="color: black;" onclick="goToProfile(${item.id})">${item.id}</a></th>
        <td>${item.name}</td>
        <td>${item.username}</td>
        <td>${item.email}</td>
        <td>${item.phone}</td>
        <td>${item.website}</td>
        <td>${item.address.street}<br>${item.address.zipcode} ${item.address.city}</td>
        <td>${item.company.name}</td>
        <td>
          <div class="btn-group-vertical">
            <button type="button" class="btn btn-warning" onclick="showTodoList(${item.id})"  data-toggle="modal" data-target="#exampleModal">Todo</button>
            <button type="button" class="btn btn-secondary" onclick="showPostsList(${item.id})"  data-toggle="modal" data-target="#exampleModal">Posts</button>
          </div>  
        </td>
    </tr>`;
    })
  });


////////////// user to do list 

function showTodoList(x) {
  listToDoID.innerHTML = '';
  var url = 'https://jsonplaceholder.typicode.com/users/'+x+'/todos'
  fetch(url)
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    data.map(function (item) {
      if (item.completed) {
        listToDoID.innerHTML += `<li class="list-group-item-success">${item.title}</li>`;
      }
      else {
        listToDoID.innerHTML += `<li class="list-group-item-danger">${item.title}</li>`;
      }
    })
  });
}

////////////// user posts list 

function showPostsList(x) {
  listToDoID.innerHTML = '';
  var url = 'https://jsonplaceholder.typicode.com/users/'+x+'/posts'
  fetch(url)
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    data.map(function (item, index) {
      if (index % 2 == 0 ) {
        listToDoID.innerHTML += `
        <button type="button" class="btn btn-success w-100" onclick="showCommentsList(${item.id})"  data-toggle="modal" data-target="#exampleModal1"><b>Post ${index+1}:</b> ${item.title}</button>
        `;
      }
      else {
        listToDoID.innerHTML += `
        <button type="button" class="btn btn-danger w-100" onclick="showCommentsList(${item.id})"  data-toggle="modal" data-target="#exampleModal1"><b>Post ${index+1}:</b> ${item.title}</button>
        `;
      }
    })
  });
}


////////////// user Comments list 

function showCommentsList(x) {
  listCommentsID.innerHTML = '';
  var url = 'https://jsonplaceholder.typicode.com/posts/'+x+'/comments'
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.map(function (item, index) {
      if (index % 2 == 0 ) {
        listCommentsID.innerHTML += `<li class="list-group-item-success"><b>Comment ${index+1}:</b> ${item.name}</li>`;
      }
      else {
        listCommentsID.innerHTML += `<li class="list-group-item-danger"><b>Comment ${index+1}:</b> ${item.name}</li>`;
      }
    })
  });
}

////////////// Image Album 

let url3 = "https://jsonplaceholder.typicode.com/photos";

fetch(url3)
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    data.map(function (item, index, arr) {
      if (index == 0) {
        selectAlbumID.innerHTML += `<option value="${item.albumId}">${item.albumId}</option>`;
      }
      else {
        if (item.albumId != arr[index - 1].albumId) {
          selectAlbumID.innerHTML += `<option value="${item.albumId}">${item.albumId}</option>`;
        }
      }
    })
  });

function showAlbumList() {
  potoAlbumDisplay.innerHTML = ``;
  var url = 'https://jsonplaceholder.typicode.com/albums/'+selectAlbumID.value+'/photos'
  fetch(url)
  .then(response => response.json())
  .then(data => {
    data.map(function (item) {
      potoAlbumDisplay.innerHTML += `<img title="Album: ${item.albumId} ,${item.title}" src="${item.url}" class="img-thumbnail myImgClass rounded "></img>`;
    })
  });
}



////////////  goto Page 
function goToProfile(x) {
  //////////// copy to local storage 
  localStorage.setItem('userIdLocal', x);
  console.log(x);
 
  window.location.href = '/profile.html';
} 