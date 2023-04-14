const React = require('react');
const Layout = require('./Layout');


module.exports = function QuestionPage({ oneTheme, oneQuestion, questionIndex }) {
  const answer = oneQuestion.answers;
  console.log('answer', answer);
  return (
    <Layout>
      <div className="question">
        <h2 className="question-title">{`Тема: ${oneTheme.theme}`}</h2>
        <div className="question-text">{`Вопрос ${questionIndex}: ${oneQuestion.questions}`}</div>
        <input className="form-control" type="text" placeholder="Твой ответ" />
        <div className="question-buttons">
          <button type="button" className="btn-question-check">
            Проверить ответ
          </button>
          <a href={`/question/${oneTheme.id}/${+questionIndex + 1}`} className="link-question-next">
            Следующий вопрос
          </a>
        </div>
        <div className="correct-answer is-visible" data-correct-answer={answer}>
          И это правильный ответ!
        </div>
        <div className="incorrect-answer is-visible">{`Неа, правильный ответ ${answer}`}</div>
      </div>
      <script src="/js/question.js"></script>
    </Layout>
  );
};
