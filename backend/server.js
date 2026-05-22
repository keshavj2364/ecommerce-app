const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ecommerce_db'
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('MySQL Connected');
    }
});

app.get('/products', (req, res) => {
    db.query('SELECT * FROM products', (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});