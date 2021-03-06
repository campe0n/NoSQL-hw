const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path:'config.env'})
const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

mongoose.connection
  .once('open', () => console.log('Connected To Mongo'))
  .on('error', (err) => {
    console.log('Error', err);
  })

// routes
app.use(require('./routes/index'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
