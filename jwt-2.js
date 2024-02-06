const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// Secret key for JWT signing and verification (replace with your own secret)
const secretKey = 'your-secret-key';

// Sample user data (replace with your own user authentication logic)
const users = [
    {
        id: 1,
        username: 'user1',
        password: 'password1'
    },
    {
        id: 2,
        username: 'user2',
        password: 'password2'
    }
];

// Route to generate a JWT token upon successful login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Replace this with your actual user authentication logic
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Generate a JWT token
        const token = jwt.sign({ userId: user.id, username: user.username }, secretKey, { expiresIn: '1h' });

        // Send the token as a response
        res.json({ token });
        console.log(token)
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Failed to authenticate token' });
        }

        req.userId = decoded.userId;
        next();
    });
};

// Protected route that requires a valid JWT token
app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'This is a protected route', userId: req.userId });
});

// Start the server
const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
