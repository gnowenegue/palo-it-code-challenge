const express = require('express');
const next = require('next');
const mongoose = require('mongoose');

const cors = require('cors');

const users = require('./routes/users');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@eugene-wccie.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.prepare().then(() => {
  const server = express();

  server.use(express.json());
  server.use(cors());

  server.use('/users', users);

  server.all('*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Server started on port ${port}.`); // eslint-disable-line no-console
  });
});
