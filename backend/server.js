const express = require('express');;
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
// bodyParser.urlencoded({ extended: true });


const app = express();
app.use(cors());
// app.use(express.json());

app.use(bodyParser.json()); // To parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // To parse URL-encoded bodies (e.g., from HTML forms)



const db = mysql.createConnection({
    port: '3306',
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'signup'
});

app.get('/', (req, res) => {
    res.json("Hello this is the backend");
}); 

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (name, email, password) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];

    db.query(sql, [values], (err, data) => {
        
        if(err) {
            console.log(err);
            return res.json(err);
        }
        console.log(data);
        
        return res.json(data);
    })
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE email = ?"
    db.query(sql, [req.body.email], (err, data) => {
        if(err) {
            return res.json(err);
        }
        if(data.length > 0) {
            if(req.body.password === data[0].password) {
                console.log("Login successful");
                console.log(data);
                return res.json(data);
            } else {
                return res.json("Incorrect password");
            }
        } else {
            return res.json("User not found");
        }
    })
}); 




app.listen(8081, () => {
    console.log("Server is running on port 8081");
});

