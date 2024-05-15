const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const usersRoute = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users', usersRoute);

app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});