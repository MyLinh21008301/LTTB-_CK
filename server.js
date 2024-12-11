const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = 3000;
const path = require('path'); // Thêm module path
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json()); // Middleware để parse JSON
app.use(bodyParser.json());

// Cấu hình kết nối MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sapassword',
    database: 'medicine'
});

// API lấy medicine
app.get('/medi', (req, res) => {
    connection.query('SELECT * FROM Medi', (err, results) => {
        if (err) {
            console.error('Lỗi khi truy vấn:', err.message);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(results);
    });
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});