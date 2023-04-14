require('@babel/register');

const express = require('express');
const path = require('path');
const logger = require('morgan');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const MainPage = require('./components/MainPage');
const LoginPage = require('./components/LoginPage');
const RegistrationPage = require('./components/RegistrationPage');
const { Theme } = require('./db/models');
const { Question } = require('./db/models');
const QuestionPage = require('./components/QuestionPage');
const { User } = require('./db/models');

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
  const element = React.createElement(MainPage, { cards });
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
  const element = React.createElement(LoginPage);
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.send(`<!DOCTYPE html>${html}`);
});

app.post('/login', async (req, res) => {
  console.log('reqqqq', req.body);
  try {
    const { login, password } = req.body;
    const user = await User.findOne({ where: { name: login } });
    return res.json(user);
  } catch (error) {
    return console.log(error.messege);
  }
});

app.get('/registration', (req, res) => {
  const element = React.createElement(RegistrationPage);
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.send(`<!DOCTYPE html>${html}`);
});

app.post('/registration', async (req, res) => {
  try {
    const { login, password } = req.body;
    console.log(req.body);
    const user = await User.create({ name: login, password });
    console.log(user);
  } catch (error) {
    console.log(error.messege);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server started at port 3000');
});
