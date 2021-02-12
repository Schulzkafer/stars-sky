const http = require('http')
const fs = require('fs')
const PORT = process.env.PORT || 3000

http.createServer(function(req,res) {
    fs.readFile('index.html', 'utf8', (err, data)=> {
        if (err) throw Error();
        else res.end(data)
    });
 }).listen(PORT, ()=>console.log('server--ok'))