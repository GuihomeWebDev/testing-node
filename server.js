// Imports
const express = require('express')

//Instance server
let server = express();
// Create port 
let port = 3000;

//Config server
server.get('/', function(req, res) { 
    res.setHeader('Content-Type', 'text/html');
    res.send('<h1>Bienvenue sur mon server nodeJs !!</h1> '); 
})

// Launch server
server.listen(port, () =>  { 
    console.log('le serveur fonctionne sur 127.0.0.7:3000')
})



