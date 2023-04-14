const React = require('react');
const Layout = require('./Layout');

module.exports = function QuestionPage({ card, cards }) {
  return (
    <Layout>
      <div className="question">
        <h3 className="question-title">{cards[0].theme}</h3>
        <h3 className="question-title">{card[0].questions}</h3>
      </div>
    </Layout>
  );
};
