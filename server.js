const express = requir('express');

const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app =express();

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
      // MySQL username,
        user: 'root',
      // TODO: Add MySQL password here
        password: '',
        database: 'movies_db'
    },
    console.log(`Connected to the movies_db database.`)
);