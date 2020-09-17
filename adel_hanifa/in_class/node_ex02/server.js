const http = require('http');
const PORT = 8080;
const fs = require('fs');


let myServer = http.createServer((request, response)=> {
    let currentUrl = request.url;
    console.log('The URL Path is: ', currentUrl);
    switch (currentUrl) {
        
        case '/':
            fs.readFile('index.html', (err, data)=> {
               if(err) throw err;
               response.write(data);
               response.end();
            });
            break;
        
        case '/code':
            console.log('code.html');
            fs.readFile('code.html', (err, data)=> {
                if(err) throw err;
                response.write(data);
                response.end();
             });
            break;
        
        case '/profile':
            console.log('profile.html');
            fs.readFile('profile.html', (err, data)=> {
                if(err) throw err;
                response.write(data);
                response.end();
             });
            break;
        
        case '/works':
            console.log('works.html');
            fs.readFile('works.html', (err, data)=> {
                if(err) throw err;
                response.write(data);
                response.end();
                });
            break;
    
        default:
            fs.readFile('404.html', (err, data)=> {
                if(err) throw err;
                response.write(data);
                response.end();
             });
            break;
    }
});

myServer.listen(PORT, ()=> {
    console.log('My Web Server is running on: localhost:' + PORT );
});
