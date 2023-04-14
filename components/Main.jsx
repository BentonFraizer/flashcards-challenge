const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ cards }) {
  return (
    <Layout>
      <ul className="cards-list">
        {cards.map((card, index) => (
          <li className="card-item" key={index}>
            <div className="card-title">{card.theme}</div>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
