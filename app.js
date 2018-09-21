const express = require('express');
const app = express();
const morgan = require('morgan');
const views = require('./views');


app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
  res.send(views.main(''));
});

const PORT = 3000;

app.listen(PORT, () => { 
  console.log(`Listening on port ${PORT}`);
})
