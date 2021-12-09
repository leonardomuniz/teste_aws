const express = require('express');

const app = express();

app.get('/', (request, response) =>{
    return response.json({message: 'Server is Up'});
});

app.listen(3333);
console.log('The Server is running')