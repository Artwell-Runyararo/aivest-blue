// const mysql = require('mysql2');
import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aivest'
})

export default connection;