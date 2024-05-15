const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Asnpn@123',
  database: 'node-complete'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL database connected!');
});

module.exports = db;
