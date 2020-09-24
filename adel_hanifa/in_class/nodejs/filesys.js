var http = require('http');
var fs = require('fs');
const fetch = require('node-fetch')
let users =[]
for (let i =1 ; i <51 ; i++){
  users.push({
    firstName: "Student",
    lastName: "Number"+i,
    birthday: "2000-01-01",
    gender: "Male",
    country: "MusterCountry",
    addressStreet: "MusterStr.",
    addressNr: ""+(22+i)+"",
    addressPlz: ""+(41236+i)+"",
    addressCity: "MusterCity",
    phoneNumber: "0123 456789",
    userGroup: "Student",
    email: "Student@Number"+i+".com",
    password: "0000"
})
}
fs.writeFileSync(__dirname +'/user.json', JSON.stringify(users));

http.createServer(function (req, res) {
  fs.readFile('../portfolio/index.html', function(err, data) {
    res.write();
    res.end();
  });
}).listen(8080);