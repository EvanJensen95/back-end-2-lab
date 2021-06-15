const houses = require('./db.json') //auto fills with json file when using house
let globalId = 4;

module.exports = {
    getAllHouses: (req, res) => res.status(200).send(houses), 
    deleteHouse: function (req,res) {
        const targetIndex = houses.findIndex(function (houseObj) {
            return houseObj.id === +req.params.houseId
        });

        houses.splice(targetIndex, 1)
        res.status(200).send(houses)
       
        //keep terms consistent
    }, //finds index of element given
    createHouse: (req, res) => {
        let { address, price, imageURL } = req.body
        let newHouse = {
            id: globalId,
            address,
            price,
            imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        globalId++;
    },
    updateHouse: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = houses.findIndex(elem => +elem.id === +id)

        if (houses[index].price <= 10000 && type === 'minus') {
            houses[index].price = 0
            res.status(200).send(houses)
        } else if (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }
// account for negative
    }
}




// function getHouses() {

// }

// function deleteHouse() {

// }

// function createHouse() {

// }

// function updateHouse() {

// }
