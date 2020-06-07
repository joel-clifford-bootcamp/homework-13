const orm = require("./config/orm.js");

const burger = {
    all: (cb) => {
        orm.selectAll(cb, (res) => {
            cb(res);
        });
    },
    create: (burger_name, cb) => {
        orm.insertOne(burger_name, (res) => {
            cb(res);
        });
    },
    devour: (id, cb) => {
        orm.updateOne(id, (res) => {
            cb(res);
        })
    }
};

module.exports = burger
