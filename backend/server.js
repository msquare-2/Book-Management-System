const express = require('express');
const dbConnect = require('./config/dbConnect')();
const app = express();


// Routes

// User Routes
// Register
app.post('/api/users/register', (req, res) => {
    res.send('Register route');
});
// Login
app.post('/api/users/login', (req, res) => {
    res.send('Login route');
});
// Update User
app.put('/api/users/update', (req, res) => {
    res.send('Update route');
});
// Delete User
app.delete('/api/users/:id', (req, res) => {
    res.send('Delete route');
});
// fetch users
app.put('/api/users', (req, res) => {
    res.send('Fetch users');
});



// Server
const PORT =process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});

//n0RwMtBtcSKvooYa
//mongodb+srv://msquare-2:<password>@cluster0.na948.mongodb.net/test