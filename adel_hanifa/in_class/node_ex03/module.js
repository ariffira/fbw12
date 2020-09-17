const fetch = require("node-fetch");
let myData = '';


exports.myDateTime = function () {
    let date = new Date()
    let fullDate = date.toLocaleTimeString() + " " + date.toLocaleDateString();
    return fullDate;
};

exports.calc = function (a, b, x) {
    switch (x) {
        case 'add':
            return `${a} + ${b} =  ${a + b}`;
            break;
        case 'sub':
            return `${a} - ${b} =  ${a - b}`;
            break;
        case 'mul':
            return `${a} * ${b} =  ${a * b}`;
            break;
        case 'div':
            return `${a} / ${b} =  ${a / b}`;
            break;

    }
};

exports.githupData =async function (res) {
    
    let fetchAPI =await fetch('https://api.github.com/users/adelhanifa')
    let user =await fetchAPI.json()
    console.log(user)
    
    res.write( `
    <div class="table-responsive container mt-5 w-75">
        <h1>Here is some info from my github api :<h1>

        <table class="table table-striped table-dark table-bordered border border-danger rounded">
            <tr>
                <th>id</th>
                <td>${user.id}</td>
            </tr>
            <tr>
                <th>Name</th>
                <td>${user.name}</td>
            </tr>
            <tr>
                <th>Username</th>
                <td>${user.login}</td>
            </tr>
            <tr>
                <th>Repositories</th>
                <td>${user.public_repos}</td>
            </tr>
            <tr>
                <th>Location</th>
                <td>${user.location}</td>
            </tr>
            <tr>
                <th>followers</th>
                <td>${user.followers}</td>
            </tr>
            <tr>
                <th>following</th>
                <td>${user.following}</td>
            </tr>
            <tr>
                <th>Image with link</th>
                <td><a target="_blank" href="${user.html_url}"><img style="width: 25%;" src="${user.avatar_url}" alt="click to go to  ${user.name} githup page"></a></td>
            </tr>
        </table>
    </div>`);
    res.end();
}
