// Set up MySQL connection.
var mysql = require("mysql");
require("dotenv").config();



var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "burgers_db"

});
};

// IF I PUT IT THIS WAY IT BREAKS ALL MY CONNECTIONS. ONLY IF I DO IT AS ABOVE THEN I HAVE CONNECTIONS//
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: process.env.db_user,
//   password: process.env.db_password,
//   database: "burgers_db"
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
