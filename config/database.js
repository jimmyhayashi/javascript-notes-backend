const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/javascriptNotation').then(() => console.log('Connection successful'))
.catch((err) => console.log(err));
