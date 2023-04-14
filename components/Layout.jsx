const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/application.css" />
        <title>Flashcards</title>
      </head>
      <div className="container">
        <body>
          <header className="header">
            <div className="logo">
              <img src="./images/leopards-logo.jpg" alt="leopards" />
            </div>
            <h1 className="header-title">Simplesons</h1>
            <ul className="nav">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Регистрация
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Вход
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link active">
                  Главная
                </a>
              </li>
            </ul>
          </header>
          <main>{children}</main>
        </body>
      </div>

      <script defer src="/js/application.js"></script>
    </html>
  );
};
