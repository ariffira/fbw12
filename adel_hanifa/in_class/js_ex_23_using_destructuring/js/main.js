////////////// user table 

let url = "https://jsonplaceholder.typicode.com/users/";

fetch(url)
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    data.map(function (item, index) {
      console.log(item);

      var {id, name, username, email, phone, website, address, company } = item;
      address = `${address.street}<br>${address.zipcode} ${address.city}`;
      company = `${company.name}`;

      console.log(id, name, username, email, phone, website, address, company)

      userTableID.innerHTML += `
    <tr>
        <th><a type="button" href="#" style="color: black;" onclick="goToProfile(${id})">${id}</a></th>
        <td>${name}</td>
        <td>${username}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${website}</td>
        <td>${address}</td>
        <td>${company}</td>
        <td>
          <div class="btn-group-vertical">
            <button type="button" class="btn btn-warning" onclick="showTodoList(${id})"  data-toggle="modal" data-target="#exampleModal">Todo</button>
            <button type="button" class="btn btn-secondary" onclick="showPostsList(${id})"  data-toggle="modal" data-target="#exampleModal">Posts</button>
          </div>  
        </td>
    </tr>`;
    })
  });


////////////// user to do list 

function showTodoList(x) {
  listToDoID.innerHTML = '';
  var url = 'https://jsonplaceholder.typicode.com/users/' + x + '/todos'
  fetch(url)
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      data.map(function (item) {
        var {title, completed} = item;
        if (completed) {
          listToDoID.innerHTML += `<li class="list-group-item-success">${title}</li>`;
        }
        else {
          listToDoID.innerHTML += `<li class="list-group-item-danger">${title}</li>`;
        }
      })
    });
}

////////////// user posts list 

function showPostsList(x) {
  listToDoID.innerHTML = '';
  var url = 'https://jsonplaceholder.typicode.com/users/' + x + '/posts'
  fetch(url)
    .then(response => response.json())
    .then(data => {
      //console.log(data);

      data.map(function (item, index) {
        var {id , title}= item

        if (index % 2 == 0) {
          listToDoID.innerHTML += `
        <button type="button" class="btn btn-success w-100" onclick="showCommentsList(${id})"  data-toggle="modal" data-target="#exampleModal1"><b>Post ${index + 1}:</b> ${title}</button>
        `;
        }
        else {
          listToDoID.innerHTML += `
        <button type="button" class="btn btn-danger w-100" onclick="showCommentsList(${id})"  data-toggle="modal" data-target="#exampleModal1"><b>Post ${index + 1}:</b> ${title}</button>
        `;
        }
      })
    });
}


////////////// user Comments list 

function showCommentsList(x) {
  listCommentsID.innerHTML = '';
  var url = 'https://jsonplaceholder.typicode.com/posts/' + x + '/comments'
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      data.map(function (item, index) {
        var {name} = item;
        if (index % 2 == 0) {
          listCommentsID.innerHTML += `<li class="list-group-item-success"><b>Comment ${index + 1}:</b> ${name}</li>`;
        }
        else {
          listCommentsID.innerHTML += `<li class="list-group-item-danger"><b>Comment ${index + 1}:</b> ${name}</li>`;
        }
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