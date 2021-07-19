const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path:'config.env'})
const PORT = process.env.PORT;

const app = express();

app.set('views', path.resolve(__dirname, "public"))

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
