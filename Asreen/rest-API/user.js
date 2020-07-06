//REST API
// fetch(): bring something or get something

//Exercise 23
// Show you the list of user from the API
// another one will take user id number and show the specific user onClick
// create another page which will show every post and its relevant comments, user name from API using /posts and /comments
//localStorage.clear();
let url = "https://jsonplaceholder.typicode.com/users"
fetch(url)
    .then(response => response.json()) //take only json data and return
    .then(data => {
        console.log(data);
        data.map(display);
        function display(item) {
            //console.log('Adress', item.address.street, item.address.city)
            console.log(item.id);
            userInfo.innerHTML += `
        <tr>
        <th scope="row"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" id='btnID' class="btn btn-info" value="${item.id}" onclick="seeInfo(this.value)">${item.id}</button></th>
        <td>${item.username}</td>
        <td>${item.name}</td>
        <td>${item.website}</td>
        <td>${item.phone}</td>
        <td>${item.email}</td>
        <td>${item.company.name}</td>   
      </tr> 
        `
            fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}/comments`)
                .then((response) => response.json())
                .then((json) => {
                    console.log(json)
                })
            // nested resources
            // Equivalent to /comments?postId=1

        }

    });

fetch('./user.json')
    .then(response => {
        return response.json()

    })
    .then(data => {
        console.log(data)
    });

// fetch albums 
fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(response => {
        return response.json()
    })
    .then(showAlbums);
function showAlbums(data) {
    data.map(item => {
        if (item.id <= 10)
            albumID.innerHTML += `<div style="float:left;color:orange"><li style="font-size:24px">${item.id} ${item.title}</li></div>`
        else if (item.id <= 20) albumID.innerHTML += `<div style="float:left ;color:red"><li style="font-size:24px">${item.id} ${item.title}</li></div>`
    })

    // console.log(data)
}
function seeInfo(userIdValue) {
    document.getElementById('commentsID').innerHTML = ' ';
    fetch(`https://jsonplaceholder.typicode.com/posts/${userIdValue}/comments`)
        .then((response) => response.json())
        .then((data) => {
            console.log(userIdValue);
            console.log(data);
            data.map(item => {
                console.log(item);
                console.log(userIdValue, item.postId);
                if (item.postId == userIdValue) {
                    console.log(userIdValue, item.postId);
                    document.getElementById('commentsID').innerHTML += `              
                    <ul>
                             <li>postId: ${item.postId}</li>
                             <li>user Id:${item.id}</li>
                             <li>User name: ${item.name}</li>
                             <li>body: ${item.body}</li>
                             <li>user's email:${item.email}</li>
                    </ul>                                                                         
                       `
                }
            })
        })
}
// photos
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
      potoAlbumDisplay.innerHTML += `<img title="Album: ${item.albumId} ,${item.title}" src="${item.url}" class="img-thumbnail myImgClass rounded " style="width:50px;height:50px;"></img>`;
    })
  });
}



// 

//  fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
//      .then(response => response.json())
//      .then(data => {
//         data.map((item) => {
//              console.log(item.url)
//             document.getElementById('seePhotos').innerHTML += `<img src='${item.thumbnailUrl}'       class="img-thumbnail myImgClass rounded ">`
//          })
//      })


