const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const cors = require('cors');
const knex = require('knex');
const knexfile = require('./knexfile');
const db = knex(knexfile.test);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(bodyParser.json());
app.use(cors());

app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  db('users')
    .where({
      email: email,
      password: password
    })
    .first()
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(400).send('Usuário não encontrado');
      }
    })
    .catch(err => res.status(400).send(err));
});
