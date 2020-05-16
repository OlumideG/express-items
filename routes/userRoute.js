const express = require("express");
const router = express.Router();

const items = [];
let id = 1;


router.get('/items', (request, response) => {
    response.json(items)
    console.log(items)
});


router.get('/items/:id', (request, response) => {
    const user = items.find(val => val.id === Number(request.params.id))
    response.json(user)
});


router.post('/items', (request, response) => {
    items.push({
        name: request.body.name,
        price: request.body.price,
        id: ++id
    });
    response.json({ message: " item created" });
    console.log(items)
});


router.patch("/items/:id", (require, response) => {
    const user = items.find(val => val.id === Number(require.params.id));
    user.name = require.body.name;
    user.price = require.body.price
    response.json({ message: "Item updated" });
});


router.delete("/items/:id", (require, response) => {
    const userIndex = items.findIndex(val => val.id === Number(require.params.id))
    items.splice(userIndex, 1)
    response.json({ message: "Item deleted" })

});

module.exports = router;