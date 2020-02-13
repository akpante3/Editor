const path = require('path');
const express = require('express');
const cors = require('cors');


const app = express()

// body parser
app.use(express.json());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Enable cors
app.use(cors()); 

// Routes
app.use('/api/v1/code', require('./router/code.js'))

const PORT =  5000

app.listen(PORT, () => console.log(`Server running at ${PORT}`));