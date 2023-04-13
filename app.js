require('@babel/register');

const express = require('express');
const path = require('path');
const logger = require('morgan');

// создаём сервер
const app = express();

app.use(logger('dev'));

// учим сервер понимать fetch-запросы в формате JSON
app.use(express.json());

// обработки данных из формы
app.use(express.urlencoded({ extended: false }));

// показываем откуда отдавать статику
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server started at port 3000');
});
