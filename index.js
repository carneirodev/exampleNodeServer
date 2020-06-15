const express = require('express')
const server = express();
server.use(express.json())


const users = ['Backend do WeSports','Primeiro deploy']



server.get('/users', (req, res) => {    
    return res.json(users);
})



server.listen(3000);
