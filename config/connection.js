const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "bootcamp",
  database: "burgers_db"
});

con.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + con.threadId);
  });
  
  module.exports = con;
  