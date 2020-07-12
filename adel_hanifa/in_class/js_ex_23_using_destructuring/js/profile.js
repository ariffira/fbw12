////////// take user ID

let myUserID = localStorage.getItem('userIdLocal');
console.log(myUserID)

function checkSelectUser() {
    if (myUserID == null) {
        if (confirm("Press ok to go to home page and select a user.")) {
            window.location.href = '/index.html';
        } else {
            checkSelectUser()
        }
    }
}

checkSelectUser();

/// user data
let url1 = "https://jsonplaceholder.typicode.com/users/" + myUserID;

fetch(url1)
    .then(response => response.json())
    .then(data => {
        //console.log(data);

        userNameId.innerHTML = `${data.name}`;
        userInfoId.innerHTML = `
    <p class=" label-default">User name: ${data.username}</p>
    <p class="label-primary">Email: ${data.email}</p>
    <p class="label-success">Phone: ${data.phone}</p>
    <p class="label-info">Website: ${data.website}</p>
    <p class="label-warning">Adress: ${data.address.street}<br>${data.address.zipcode} ${data.address.city}</p>
    <p class="label-danger">Company: ${data.company.name}</p>
    `;
    });


/// user posts
var url2 = 'https://jsonplaceholder.typicode.com/users/' + myUserID + '/posts'
fetch(url2)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        data.map(function (item) {
            userpostId.innerHTML += `
        <div class="col-sm-12">
            <div class="well">
                <p><b>${item.title},</b> ${item.body}</p>
                <div class="nav nav-tabs nav-justified" role="group">
                    <button type="button" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-thumbs-up"></span> Like
                    </button>  
                    <button type="button" class="btn btn-default btn-sm" onclick="showCommentsList(${item.id})">
                        <span class="glyphicon glyphicon-comment"></span> Comments
                    </button>  
                    <button type="button" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-share-alt"></span> share
                    </button>  
                </div>
                <div id="thisPostID${item.id}"></div>
            </div>
        </div>
        `
        })
    });


//////coments
let commentsIdValue = 0;
function showCommentsList(x) {
    if (commentsIdValue == 0){

    }
    else {
        document.getElementById(commentsIdValue).innerHTML = '';
    }

    var url = 'https://jsonplaceholder.typicode.com/posts/' + x + '/comments'
    fetch(url)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            commentsIdValue = 'thisPostID'+x;
            console.log(commentsIdValue);
            document.getElementById('thisPostID'+x).innerHTML += `
            <br><p class="well text-left">
               ${data.map(function (item, index) {
                    return `<b>Comment ${index + 1}:</b> ${item.name}<br>`;
            }).join(' ')}
            </p>`;
        });
}