const orm = require("../config/orm.js");

const burger = {
    /**
     * Get all burgers
     * @param {[function]} cb [callback function]
     */ 
    all: (cb) => {
        orm.selectAll(cb, (res) => {
            cb(res);
        });
    },
    /**
     * Add a new burger
     * @param {[string]} burger_name [callback function]
     * @param {[function]} cb [callback function]
     */ 
    create: (burger_name, cb) => {
        orm.insertOne(burger_name, (res) => {
            cb(res);
        });
    },
    /**
     * Set a burger's devoured value = true
     * @param {[int]} id [burger id]
     * @param {[function]} cb [callback function]
     */ 
    devour: (id, cb) => {
        orm.updateOne(id, (res) => {
            cb(res);
        })
    },    
    /**
    * Delete all records in burgers table
    * @param {[function]} cb [callback function]
    */ 
    clear: (cb) => orm.deleteAll(res => {
        cb(res);
    })
};

module.exports = burger
