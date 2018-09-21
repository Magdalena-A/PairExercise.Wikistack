const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
  res.send('Hello World');
});

const PORT = 1444;

app.listen(PORT, () => { 
  console.log(`Listening on port ${PORT}`);
})
