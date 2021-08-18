const mysql = require('mysql2');

// Connect to database
const connection = mysql.createConnection(
    {
        host: 'localhost',
      // MySQL username,
        user: 'root',
      // TODO: Add MySQL password here
        password: 'Kissazz1',
        database: 'business_db'
    },
);

connection.connect(err => {
  if (err) throw err
})

module.exports= connection