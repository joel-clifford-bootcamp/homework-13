const con = require("../config/connection.js");

const orm = {
    /**
     * Select all records in the burtgers table
     * * @param {[function]} cb [callback function]
     */
    selectAll: (cb) => {
        const queryString = "SELECT * FROM burgers";
        con.query(queryString, (err, results) => {
            if (err) throw err;
            // console.table(results);
            cb(results)
        });
    },
    /**
     * Insert a new burger into the burgers table
     * @param {[string]} burger_name [name of new burger]
     * @param {[function]} cb [callback function]
     */
    insertOne: (burger_name, cb) => {
        const queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        con.query(queryString, [burger_name], (err, results) => {
            if (err) throw err;
            cb(results);
        });
    },
    /**
     * Update the devoured status of a burger in the burgers table
     * @param {[int]} id [unique identifier of burger]
     * @param {[function]} cb [callback function]
     */
    updateOne: (id, cb) => {
        const queryString = "UPDATE burgers SET devoured = True WHERE id = ?";
        con.query(queryString, [id], (err, results) => {
            if (err) throw err;
            cb(results);
        });
    },
    /**
     * Delete all saved burgers
     * @param {[function]} cb [callback function]
     */
    deleteAll: (cb) => {
        const queryString = "DELETE FROM burgers WHERE devoured = ?";
        con.query(queryString, [true], (err, results) => {
            if (err) throw err;
            cb(results);
        })
    }
}

module.exports = orm