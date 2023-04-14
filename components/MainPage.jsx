const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ themes }) {
  return (
    <Layout>
      <ul className="cards-list">

        {themes.map((theme) => (
          <li className="card-item" key={theme.id}>
            <a href={`/question/${theme.id}/1`} className="card-link">
              <div className="card-title">{theme.theme}</div>
            </a>
          </li>
        ))}
      </ul>
      <script defer src="/js/application.js"></script>
    </Layout>
  );
};
