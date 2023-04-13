require('@babel/register');

const express = require('express');
const path = require('path');
const logger = require('morgan');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Main = require('./components/Main');

// создаём сервер
const app = express();

app.use(logger('dev'));

// учим сервер понимать fetch-запросы в формате JSON
app.use(express.json());

// обработки данных из формы
app.use(express.urlencoded({ extended: false }));

// показываем откуда отдавать статику
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  const cards = [
    {
      title: 'Первая карточка в которой длинная тема или даже очень длинная ntvf ,asd asd asd asd asd gk sad asd asdasd asdkg sfd',
      qwestion: 'Вопрос 1 первой карточки',
      answer: 'Ответ 1 первой карточки',
    },
    {
      title: 'Вторая карточка',
      qwestion: 'Вопрос 1 второй карточки',
      answer: 'Ответ 1 второй карточки',
    },
    {
      title: 'Третья карточка',
      qwestion: 'Вопрос 1 третьей карточки',
      answer: 'Ответ 1 третьей карточки',
    },
    {
      title: 'Третья карточка',
      qwestion: 'Вопрос 1 третьей карточки',
      answer: 'Ответ 1 третьей карточки',
    },
    {
      title: 'Вторая карточка',
      qwestion: 'Вопрос 1 второй карточки',
      answer: 'Ответ 1 второй карточки',
    },
    {
      title: 'Третья карточка',
      qwestion: 'Вопрос 1 третьей карточки',
      answer: 'Ответ 1 третьей карточки',
    },
    {
      title: 'Третья карточка',
      qwestion: 'Вопрос 1 третьей карточки',
      answer: 'Ответ 1 третьей карточки',
    },
    {
      title: 'Вторая карточка',
      qwestion: 'Вопрос 1 второй карточки',
      answer: 'Ответ 1 второй карточки',
    },
    {
      title: 'Третья карточка',
      qwestion: 'Вопрос 1 третьей карточки',
      answer: 'Ответ 1 третьей карточки',
    },
    {
      title: 'Третья карточка',
      qwestion: 'Вопрос 1 третьей карточки',
      answer: 'Ответ 1 третьей карточки',
    },
  ];
  const element = React.createElement(Main, { cards });
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.send(`<!DOCTYPE html>${html}`);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server started at port 3000');
});
