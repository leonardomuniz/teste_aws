const express = require('express');
const cors = require('cors');

const app = express();

app.get('/', (request, response) =>{
    return response.json({message: 'Server is Up'});
});

app.use(cors());
app.listen(3333, () => console.log("Server running on port 3333"));
