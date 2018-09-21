const express = require('express');
const app = express();
const morgan = require('morgan');
const views = require('./views');
const { Page, User } = require('./models');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
  res.send(views.main(''));
});

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })

const PORT = 3000;

const init = async () => {
  await Page.sync();
  await User.sync();

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  })
}

init();
