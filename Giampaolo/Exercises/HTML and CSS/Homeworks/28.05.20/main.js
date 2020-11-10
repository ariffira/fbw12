let person = [
    Giampaolo = {
        nickname: 'Arthos',
        email: 'giampaolo@mail.com',
        password: 'oloapmaiG',
        firstName: 'Giampaolo',
        secondName: 'Lo Cascio',
        country: 'Italy',
        city: 'Duisburg',
        class: 'FBW12',
        image: 'images/Giampaolo.png'
    },

    Adel = {
        nickname: 'Ady',
        email: 'adel@mail.com',
        password: 'ledA',
        firstName: 'Adel',
        secondName: 'Hanifa',
        country: 'Syria',
        city: 'Mönchengladbach',
        class: 'FBW12',
        image: 'images/Adel.png'
    },

    Arif = {
        nickname: 'Arfy',
        email: 'arif@mail.com',
        password: 'firA',
        firstName: 'Arif',
        secondName: 'Islam',
        country: 'Bangladesh',
        city: 'Essen',
        class: 'FBW12',
        image: 'images/Arif.png'
    },

    Khaled = {
        nickname: 'Kad',
        email: 'khaled@mail.com',
        password: 'delahK',
        firstName: 'Khaled',
        secondName: 'Khatib',
        country: 'Syria',
        city: 'Dormagen',
        class: 'FBW12',
        image: 'images/Khaled.png'
    },

    Jessica = {
        nickname: 'JessiScript',
        email: 'jessica@mail.com',
        password: 'acisseJ',
        firstName: 'Jessica',
        secondName: 'De Rosa',
        country: 'Argentina',
        city: 'Düsseldorf',
        class: 'FBW12',
        image: 'images/Jessica.png'
    }
];

let login = (mail, pwd) => {
    if (mail == '' || pwd == '') {
        alert('Username/Password is missing');
    } else {
        for (let check = 0; check < person.length; check++) {
            if (mail == person[check].email && pwd == person[check].password) {
                    console.log('Loop is running for ' + check + ' times.');
                    document.getElementsByTagName("body")[0].innerHTML = `
                    <div class="container">
                        <div class="d-flex flex-column justify-content-center h-100">
                            <div class="card mb-3">
                                <div class="row no-gutters p-5">
                                    <div class="col-md-4 my-auto">
                                        <img id="profilImage" src="${person[check].image}" alt="Profile picture" class="card-img">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                        <h4>UserName</h4>
                                        <h5 id="loggedUser" class="card-title mb-5">@${person[check].nickname}</h5>
                                            <ul class="list-unstyled">
                                                <li class="media">
                                                    <img src="images/data.png" class="mr-3" alt="Data">
                                                    <div class="media-body">
                                                        <h5 id="userRealName" class="mt-0 mb-1">${person[check].firstName} ${person[check].secondName}</h5>
                                                    </div>
                                                </li>
                                                <li class="media my-4">
                                                    <img src="images/City.png" class="mr-3" alt="City">
                                                    <div class="media-body">
                                                        <h5 id="userCity" class="mt-0 mb-1">${person[check].city}</h5>
                                                    </div>
                                                </li>
                                                <li class="media">
                                                    <img src="images/globe.png" class="mr-3" alt="Country">
                                                    <div class="media-body">
                                                        <h5 id="userCountry" class="mt-0 mb-1">${person[check].country}</h5>
                                                    </div>
                                                </li>
                                                <li class="media my-4">
                                                    <img src="images/class.png" class="mr-3" alt="Classroom">
                                                    <div class="media-body">
                                                        <h5 id="userClass" class="mt-0 mb-1">${person[check].class}</h5>
                                                    </div>
                                                </li>
                                                <li class="media">
                                                    <img src="images/gmail.png" class="mr-3" alt="E-Mail">
                                                    <div class="media-body">
                                                        <h5 class="mt-0 mb-1">Current E-mail Address</h5>
                                                        <p id="userEmail">${person[check].email}</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <button class="btn btn-custom my-3 float-right" onclick="logOut()">
                                                <a id="logOutBtn" href="">Log Out</a>
                                            </button>
                                            <p class="card-text"><small class="text-muted">Last login 3 hours ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
                    break;
            } else {
                document.getElementsByTagName("body")[0].innerHTML = `
                <div class="container text-center">
                    <div class="d-flex justify-content-center h-100">
                        <div class="card mx-auto my-auto w-75 p-4" id="test">
                            <h1>Error: Wrong e-mail/password</h1>
                            <button class="btn btn-custom my-3 float-right w-25 mx-auto my-3">
                                <a id="retry" href="index.html">Retry</a>
                            </button>
                        </div>
                    </div>
                </div>`
            };
        };
    };
};

let logOut = () => {
    alert('Thank you for your visit, see you next time');
    logOutBtn.href = 'index.html';
};