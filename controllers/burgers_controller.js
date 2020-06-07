const express = require('express');
const burger = require('./models/burger.js');

const router = express.Router();


router.get('/', (req, res) => {
    burger.selectAll(data => {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index',hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    const burger_name = req.body.burger_name;

    if(burger_name.length <= 50){
        burger.insertOne(burger_name, result => {
            res.json({id: result.insertedId});
        });
    }
    else
        res.status(500).send('Burger name too long!')
});

router.put('/api/burgers/:id', (req, res) => {
    const id = req.params.id;
    burger.devour(id, result => {
        if(result.changedRows === 0)
            return res.status(404).end()

        res.status(200).end()
    })
});

module.exports = router;