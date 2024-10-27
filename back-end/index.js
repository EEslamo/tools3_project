const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');
const port = 3000;

// Import and configure CORS
app.use(cors({
  origin: 'http://localhost:3001', // Allow requests from your React app
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
  credentials: true, // Allow credentials (cookies, headers, etc.)
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
}));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.get('/', (request, response) => {
  response.json({
    info: 'Node.js, Express, and Postgres API'
  });
});

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);
app.post('/login', db.loginUser);

// Backend example: /verifyUser endpoint
// app.get('/verifyUser', (req, res) => {
//   const userId = req.query.id; // Get user ID from the request

//   pool.query('SELECT 1 FROM users WHERE id = $1', [userId], (error, results) => {
//     if (error) {
//       res.status(500).send('Database error');
//     } else if (results.rows.length === 0) {
//       res.status(404).json({ exists: false });
//     } else {
//       res.status(200).json({ exists: true });
//     }
//   });
// });



// Start the server
// app.listen(port, () => {
//   console.log(`App running on port ${port}.`);
// });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  })