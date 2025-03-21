const express = require('express');
const app = express();
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const userRouter = require('./Routes/userRouter');
const eventRouter = require('./Routes/eventRouter');

require('dotenv').config();
require('./Models/db');

const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(express.json());
app.use(cors());

app.use('/api/auth', AuthRouter);
app.use('/api/users', userRouter);
app.use('/api/events', eventRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
