import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cadastro.css';


const Cadastro: React.FC = () => {
  return (
    <div className='login-form'>
      <section id="login">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="form-wrap">
                <h1>Crie uma conta</h1>
                <form role="form" action="javascript:;" method="post" id="login-form" autoComplete="off">
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="email@exemplo.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefone" className="sr-only">Telefone</label>
                    <input type="telefone" name="telefone" id="telefone" className="form-control" placeholder="(41) 99999-9999" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="key" className="sr-only">Senha</label>
                    <input type="password" name="key" id="key" className="form-control" placeholder="Senha" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="key" className="sr-only">Confirme sua senha</label>
                    <input type="password" name="key" id="key" className="form-control" placeholder="Senha" />
                  </div>
                  <input type="submit" id="btn-login" className="btn btn-custom btn-lg btn-block" value="Registrar-se" />
                </form>
                <p className='links-login'>Já possui uma conta? <a href='Login' className=''>Login</a></p>
                <hr />
                <div id="footer">
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-12">
                        <p>CAGI © - 2023</p>
                        <p>Feito por <strong><a href="https://www.instagram.com/cagiufpr/" target="_blank" rel="noopener noreferrer">CAGI</a></strong></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cadastro;
