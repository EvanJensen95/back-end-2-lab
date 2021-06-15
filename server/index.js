const express = require('express')
const app = express();
const cors = require('cors')
const ctrl = require('./controller.js') //needs to be ./ to call file controller.js

const { getAllHouses, deleteHouse, createHouse, updateHouse } = ctrl

app.use(express.json());
app.use(cors());

app.get('/api/houses', getAllHouses)
app.delete('/api/houses/:houseId', deleteHouse)
app.post('/api/houses', createHouse)
app.put('/api/houses/:houseId', updateHouse)

serverPort = 4005;
app.listen(serverPort, function(){
    console.log(`Server is running on ${serverPort}`)
})

