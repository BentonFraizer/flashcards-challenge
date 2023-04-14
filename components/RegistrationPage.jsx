const React = require('react');
const Layout = require('./Layout');

module.exports = function RegistrationPage() {
  return (
    <Layout>
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title">Регистрация</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div className="modal-body">
          <form className="form-registration">
            <div className="form-floating">
              <label htmlFor="floatingInput">
                <input name="login" type="text" className="form-control" id="floatingInput" placeholder="Имя или nickname" autoComplete="off" />
              </label>
            </div>
            <div className="form-floating">
              <label htmlFor="floatingPassword">
                <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Пароль (желательно посложнее Qwerty)" autoComplete="off" />
              </label>
            </div>
            <button className="btn-registration" type="submit">
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
      <script src="./js/registration.js"></script>
    </Layout>
  );
};