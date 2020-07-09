const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get('/', (req, res) => {
    burger.all(data => {
        const hbsObject = {
            burgers: data
        };

        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    // console.log("POST")
    const burger_name = req.body.burger_name;
    if(burger_name.length <= 50 && burger_name.length > 0 ){
        burger.create(burger_name, result => {
            res.json({id: result.insertedId});
        });
    }
    else
        res.status(500);
});

router.put('/api/burgers/:id', (req, res) => {
    // console.log("PUT")
    const id = req.params.id;
    burger.devour(id, result => {
        if(result.changedRows === 0)
            return res.status(404).end()

        res.status(200).end()
    })
});

router.delete('/api/burgers/clear', (req, res) => {
    // console.log('DELETE')
    burger.clear(result => {
        res.status(200).end();
    })
})

module.exports = router;