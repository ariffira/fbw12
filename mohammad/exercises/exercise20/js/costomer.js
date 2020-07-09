username = sessionStorage.getItem('username');
console.log(username)
let user;
let checkStorage = sessionStorage.getItem('user');

if (checkStorage)
    user = JSON.parse(sessionStorage.getItem('user'))
console.log(user)

if (username == user.userName) {

    document.getElementById('profile').innerHTML = `
    <div class="text-center col-sm-7">
    <div class="row d-flex justify-content-center well ">
    <a href="customer.html">
        <img src="${user.image}" class="img-fluid  img-circle " width="200px" height="200px"></a>
    <h2 class="h4 mt-2 mb-0"> ${user.userName} </h2>
    <div class="my-1">
        <i class="fa fa-star text-yellow"></i> <i class="fa fa-star text-yellow"></i> <i class="fa fa-star text-yellow"></i> <i class="fa fa-star text-yellow"></i> <i class="far fa-star text-yellow"></i>
    </div>
    <p class="text-muted"> ${user.eMail} </p>
    <p> Huge fan of HTML, CSS and Javascript. </p>
    <div class="cover-controls cover-controls-bottom">
        <a href="#" class="btn btn-light" data-toggle="modal" data-target="#followersModal">2,159 Followers</a> <a href="#" class="btn btn-light" data-toggle="modal" data-target="#followingModal">136 Following</a>
    </div>
</div>
</div>

            `;

    document.getElementById('hello').innerHTML = `Hallo ${user.userName}`

} else {
    alert('you have to sign in first')
    window.location.href = 'index.html';
}


function signout() {
    sessionStorage.removeItem('username');
}

function checkMember(member) {
    if (member == 'admin')
        return '<h4 class="card-title"> you are Admin</h4>'
    else return '<h4 class="card-title"> you are customer</h4>'
}