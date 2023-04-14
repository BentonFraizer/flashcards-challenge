const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title">Вход</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div className="modal-body">
          <form className="form-login">
            <div className="form-floating">
              <label htmlFor="floatingInput">
                <input type="email" className="form-control" id="floatingInput" placeholder="Имя или nickname" autoComplete="off" />
              </label>
            </div>
            <div className="form-floating mb-3">
              <label htmlFor="floatingPassword">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Пароль (посложнее Qwerty)" autoComplete="off" />
              </label>
            </div>
            <button className="btn-login" type="submit">
              Войти
            </button>
          </form>
        </div>
      </div>
      <script src="./js/login.js"></script>
    </Layout>
  );
};
