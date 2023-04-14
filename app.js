require('@babel/register');

const express = require('express');
const path = require('path');
const logger = require('morgan');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const MainPage = require('./components/MainPage');
const LoginPage = require('./components/LoginPage');
const RegistrationPage = require('./components/RegistrationPage');
const QuestionPage = require('./components/QuestionPage');

const { Theme } = require('./db/models');
const { Question } = require('./db/models');

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
  // const cards = await Question.findAll();
  // console.log('cards', cards);
  const themes = await Theme.findAll();
  const element = React.createElement(MainPage, { themes });
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.send(`<!DOCTYPE html>${html}`);
});

app.get('/login', (req, res) => {
  const element = React.createElement(LoginPage);
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.send(`<!DOCTYPE html>${html}`);
});

app.get('/registration', (req, res) => {
  const element = React.createElement(RegistrationPage);
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.send(`<!DOCTYPE html>${html}`);
});

app.get('/question/:themeId/:questionIndex', async (req, res) => {
  const { themeId, questionIndex } = req.params;
  const oneTheme = await Theme.findOne({ where: { id: themeId } });
  const oneQuestion = await Question.findOne({ where: { theme_id: themeId }, offset: Number(questionIndex - 1) });
  if (!oneQuestion) {
    res.redirect('/');
  } else {
    const element = React.createElement(QuestionPage, { oneTheme, oneQuestion, questionIndex });
    const html = ReactDOMServer.renderToStaticMarkup(element);
    res.send(`<!DOCTYPE html>${html}`);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server started at port 3000');
});
