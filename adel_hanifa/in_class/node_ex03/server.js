const http = require('http');
const PORT = 5000;
const fs = require('fs');
const fn = require('./module');
const toUpperCase = require('upper-case')




let myServer = http.createServer((request, response) => {
    fs.readFile('index.html', (err, data)=> {
        if(err) throw err;
        response.write(data);
        response.write(`
        <div class="container mt-5 d-flex flex-column w-50 border border-danger rounded bg-light">
            <h1 class="text-success">The currently date is:<h1>
            <h3 class="text-primary">${fn.myDateTime()}<h3>
        </div>

        <div class="container mt-5 d-flex flex-column w-50 border border-danger rounded bg-warning">
            <h1 class="text-danger">Here some calculations:<h1>
            <h3 class="text-secondary">${fn.calc(2, 5, 'add')}<h3>
            <h3 class="text-secondary">${fn.calc(2, 5, 'sub')}<h3>
            <h3 class="text-secondary">${fn.calc(2, 5, 'mul')}<h3>
            <h3 class="text-secondary">${fn.calc(2, 5, 'div')}<h3>
        </div>
        
        <div class="container mt-5 d-flex flex-column w-50 border border-danger rounded bg-warning">
            <h3 class="text-secondary">${toUpperCase.upperCase("adel hanifa")}<h3>
        </div>`);
        fn.githupData(response);     

     });
});

myServer.listen(PORT, () => {
    console.log('My Web Server is running on: localhost:' + PORT);
});
