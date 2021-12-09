const express = require('express');

const app = express();

app.get('/', (request, response) =>{
    return resp.json({message: 'Server is Up'});
});

app.listen(3333);