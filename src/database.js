const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
.then(db => console.log('DB ok'))
.catch(err => console.log(err));