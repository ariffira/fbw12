const fs = require('fs');

exports.readPath = (doc, res) => {
    fs.readFile(doc, (err, data) => {
            if (err) throw err;
    res.writeHead(200, { 'Content-type' : 'text/html' });
    res.write(data);
    res.write(`<h1>`)
    res.end();
    })
};