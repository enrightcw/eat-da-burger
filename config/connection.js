var mysql = require("mysql");

//creating local connection and targeting DB
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);

}else {
  connection = mysql.createConnection({
    host:'y0nkiij6humroewt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'dbk5hjl2qb4nwd1y',
    password: 'xl8i8ghc8d8ov5oq',
    database: 'burgers_db'
  });
};

//connecting to the server
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
