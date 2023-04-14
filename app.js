require('@babel/register');

const express = require('express');
const path = require('path');
const logger = require('morgan');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Main = require('./components/Main');
const Login = require('./components/Login');
const { Theme } = require('./db/models');
const { Question } = require('./db/models');
const QuestionPage = require('./components/QuestionPage');

// создаём сервер
const app = express();

app.use(logger('dev'));

// учим сервер понимать fetch-запросы в формате JSON
app.use(express.json());

// обработки данных из формы
app.use(express.urlencoded({ extended: false }));

// показываем откуда отдавать статику
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
  const cards = await Theme.findAll();
  const element = React.createElement(Main, { cards });
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.send(`<!DOCTYPE html>${html}`);
});

app.get('/question', async (req, res) => {
  const cards = await Theme.findAll();
  const card = await Question.findAll();
  const element = React.createElement(QuestionPage, { card, cards });
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.send(`<!DOCTYPE html>${html}`);
});

app.get('/login', (req, res) => {
  const element = React.createElement(Login);
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.send(`<!DOCTYPE html>${html}`);
});

app.post('/login', (req, res) => {
  console.log('reqqqq', req.body);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server started at port 3000');
});
