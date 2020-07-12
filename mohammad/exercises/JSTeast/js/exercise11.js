let users = [{
        password: 1,
        username: 'MOHAMMAD',
        age: 29,
        jop: 'Wep developer',
        country: 'Syria',
        pic: 'image/mohammad.jpg'
    },
    {
        password: 2,
        username: 'SUSANN',
        age: 24,
        jop: 'musician',
        country: 'Germany',
        pic: 'https://www.energy.de/sites/default/files/Stuttgart/STG_MODERATOREN_SUSANN_970x450px.png'
    },
    {
        password: 3,
        username: 'STEVEN',
        age: 30,
        jop: 'Acter',
        country: 'Holand',
        pic: 'https://images.ctfassets.net/qpn1gztbusu2/4dGfG4KJOUamzbnmV88HcX/9dfccae7fd5756bc9638517d3e14f689/2664_LM_AOP_Suess_oder_Salzig_Steven_Gaetjen_Blog_1356x764_3.jpg'
    },
    {
        password: 3,
        username: 'RAINER',
        age: 21,
        jop: 'Waiter',
        country: 'UK',
        pic: 'https://www.finance-magazin.de/fileadmin/Bilder/Ressort/CFO/CFO-Wechsel/2018.Q3/Beaujean_Rainer_CFO-Wechsel_2018_Bildquelle_Gerresheimer.jpg'
    },
    {
        password: 4,
        username: 'AHMED',
        age: 35,
        jop: 'HR',
        country: 'Jordan',
        pic: 'https://www.uni-frankfurt.de/87170149/ahmed.png'
    }
];




let checkuser = () => {
    let username = document.getElementById('username').value.toUpperCase();
    let password = document.getElementById('pwd').value;
    for (i = 0; i < users.length; i++) {
        if (username == users[i].username && password == users[i].password) {
            document.getElementById('main').innerHTML = `<h2>${users[i].username}</h2>
            <div class="card mx-auto d-block bg-secondary" style="width:400px">
                <img class="card-img-top " src="${users[i].pic}" alt="Card image" style="width:100%">
                <div class="card-body">
                    <h4 class="card-title">Password: ${users[i].password}</h4>
                    <h4 class="card-title">Age: ${users[i].age}</h4>
                    <h4 class="card-title">Country: ${users[i].country}</h4>
                    <h4 class="card-title">Jop: ${users[i].jop}</h4>
                </div>
                    
            </div><a href="exercise11.html"><button type="button" class="btn btn-danger mx-auto d-block">Sign out</button></a>`;
            if (username == 'MOHAMMAD')
                document.getElementById('main').innerHTML += tableRows[0] + tableRows[1] + tableRows[2] + tableRows[3] + tableRows[4] + tableRows[5] + tableRows[6];
            break;
        } else warning.innerHTML = 'Wrong user name or password.';


    }
}