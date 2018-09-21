const express = require('express');
const app = express();
const morgan = require('morgan');
const views = require('./views');
const { db, Page, User } = require('./models');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.use('/user', require('./routes/user.js'));
app.use('/wiki', require('./routes/wiki.js'));

app.get('/', (req, res, next) => {
  res.redirect('/wiki');
});

db.authenticate().
then(() => {
  console.log('connected to the database');
})

const PORT = 3000;

const init = async () => {
  await db.sync(); // will be called on all models

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  })
}

init();
