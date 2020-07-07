////////////////////////////   ex 11 Login

let userList = [
    {//0
        fname: 'Adel',
        sname: 'Hanifa',
        age: '28',
        adress: 'Wilhel-Strater-Str. 92<br>41236 Mönchengladbach',
        tel: '01590 5844010',
        email: 'adelhanifa@outlook.de',
        img: '<img src="img/user.png">',
        logname: 'adel',
        psw: '11111111'
    },
    {//1
        fname: 'Arif',
        sname: 'Islam',
        age: '20',
        adress: 'DüsseldorferStr. 80<br>46123 Essen',
        tel: '01590 12345678',
        email: 'arif.islam@outlook.de',
        img: '<img src="img/user.png">',
        logname: 'arif',
        psw: '22222222'
    },
    {// 2
        fname: 'Asreen',
        sname: 'Ilias',
        age: '21',
        adress: 'NeusserStr. 60<br>43612 Meerbusch',
        tel: '01590 23456781',
        email: 'asreen.ilias@outlook.de',
        img: '<img src="img/user.png">',
        logname: 'asreen',
        psw: '33333333'
    },
    {
        fname: 'Khaled',
        sname: 'Khatib',
        age: '22',
        adress: 'KölnerStr. 75<br>42361 Dormagen',
        tel: '01590 34567812',
        email: 'khaled.khatid@outlook.de',
        img: '<img src="img/user.png">',
        logname: 'khaled',
        psw: '44444444'
    },
    {
        fname: 'Bülent',
        sname: 'Kayici',
        age: '23',
        adress: 'Berlinerplaz. 116<br>46321 Düsseldorf',
        tel: '01590 45678123',
        email: 'bülent.kayici@outlook.de',
        img: '<img src="img/user.png">',
        logname: 'bülent',
        psw: '55555555'
    },
    {
        fname: 'Jessica',
        sname: 'Belen',
        age: '13',
        adress: 'Nordstr. 254<br>43621 Köln',
        tel: '01590 34567812',
        email: 'jessica.belen@outlook.de',
        img: '<img src="img/user.png">',
        logname: 'jessica',
        psw: '66666666'
    },
    {
        fname: 'Sujatha',
        sname: 'Srinivas',
        age: '14',
        adress: 'Hauptstr. 13<br>41326 Köln',
        tel: '01590 32456781',
        email: 'sujatha.srinivas@outlook.de',
        img: '<img src="img/user.png">',
        logname: 'sujatha',
        psw: '77777777'
    }
];

function logindata(n, p) {
    if (n == '' || p == '') {
        document.getElementById("titel").innerHTML = `try again...!`;
    }
    else {
        console.log(n);
        console.log(p);

        for (let i = 0; i < userList.length; i++) {
            if (n == userList[i].logname && p == userList[i].psw) {
                document.getElementById("titel").innerHTML =`User ${i + 1}`;
                document.getElementById("body").innerHTML =`
                <table>
                    <tr><th>First Name:</th><td>${userList[i].fname}</td></tr>
                    <tr><th>Secound Name:</th><td>${userList[i].sname}</td></tr>
                    <tr><th>Age:</th><td>${userList[i].age}</td></tr>
                    <tr><th>Phone:</th><td>${userList[i].tel}</td></tr>
                    <tr><th>E-Mail:</th><td>${userList[i].email}</td></tr>
                    <tr><th>Adress:</th><td>${userList[i].adress}</td></tr>
                </table>
                ${userList[i].img}`;
                break;
            }
            else {
                document.getElementById("titel").innerHTML =`not found, try again...!`;
            }
        }
        
    }
}