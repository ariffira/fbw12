const fs = require('fs');

module.exports.fileRead = (htmlPath, res) => {
    fs.readFile(htmlPath, (err, data) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write(data);
    res.end();
})
}