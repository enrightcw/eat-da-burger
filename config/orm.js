// Import MySQL connection.
var connection = require("../config/connection.js");

// Export the orm object for the model (burger.js).
module.exports = function(table) {
  // Return an object for all our SQL statement functions for the specified table.
  return {
    findAll: function(cb) {
      connection.query("SELECT * FROM ??", [table], function(err, result) {
        if (err) throw err;

        cb(result);
      });
    },
    // condition in object form: { id: 1 }
    findBy: function(condition, cb) {
      connection.query("SELECT * FROM ?? WHERE ?", [condition], function(err, result) {
        if (err) throw err;

        cb(result);
      })
    },
    create: function(newRow, cb) {

      connection.query("INSERT INTO ?? SET ?", [table, newRow], function(err, result) {
        if (err) throw err;
        
        cb(result);
      });
    },
    update: function(updatedObj, condition, cb) {
      connection.query("UPDATE ?? SET ? WHERE ?", [table, updatedObj, condition], function(err, result) {
        if (err) throw err;

        cb(result);
      });
    },
    delete: function(condition, cb) {
      connection.query("DELETE FROM ?? WHERE ?", [table, condition], function(err, result) {
        if (err) throw err;

        cb(result);
      });
    }
  } 
}
