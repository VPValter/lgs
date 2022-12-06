const express = require('express');
const connectDB = require('./config/db');

const app = express();
//Connect Database:
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// test git repo - folder lgs
app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/games', require('./routes/api/games'));
app.use('/api/devs', require('./routes/api/devs'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));