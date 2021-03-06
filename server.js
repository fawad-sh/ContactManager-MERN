const express = require('express');
const connectDb = require('./config/db');
const connectDB = require('./config/db');

const app = express();

const PORT = process.env.PORT || 5000;

//Connect DB
connectDb();

//Init middleware
app.use(express.json({ extended: false}))

app.get('/', (req,res) => {
    res.json({msg:'Welcome! to the Contact Manager API'});
})

// Define Routes

app.use('/api/users', require('./routes/users.js'));
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/contacts', require('./routes/contacts.js'));


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));