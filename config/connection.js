const mysql = require('mysql');

let con;


if(process.env.JAWSDB_URL) { 
  con = mysql.createConnection(process.env.JAWSDB_URL) 
} else{
  con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "bootcamp",
    database: "burgers_db"
  });
}

con.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + con.threadId);
  });
  
  module.exports = con;
 