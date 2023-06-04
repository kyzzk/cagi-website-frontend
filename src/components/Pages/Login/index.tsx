import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login: React.FC = () => {
  const $ = require('jquery');
  function showPassword() {
    
    var key_attr = $('#key').attr('type');
    
    if(key_attr != 'text') {
        
        $('.checkbox').addClass('show');
        $('#key').attr('type', 'text');
        
    } else {
        
        $('.checkbox').removeClass('show');
        $('#key').attr('type', 'password');
        
    }
  }
  return (
    <div className='login-form'>
      <section id="login">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="form-wrap">
                <h1>Faça login com o seu email e senha</h1>
                <form role="form" action="" method="post" id="login-form" autoComplete="off">
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="email@exemplo.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="key" className="sr-only">Senha</label>
                    <input type="password" name="key" id="key" className="form-control" placeholder="Senha" />
                  </div>
                  <div className="checkbox">
                    <span className="character-checkbox" onClick={showPassword} />
                    <span className="label mx-3">Mostrar senha</span>
                  </div>
                  <input type="submit" id="btn-login" className="btn btn-custom btn-lg btn-block" value="Log in" />
                </form>
                <a href="javascript:;" className="links-login" data-toggle="modal" data-target=".forget-modal">Esqueceu a sua senha?</a>
                <p className='links-login'>Não possui uma conta? <a href='Cadastro' className=''>Registre-se</a></p>
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

      <div className="modal fade forget-modal" tabIndex={-1} role="dialog" aria-labelledby="myForgetModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <span aria-hidden="true">x</span>
                <span className="sr-only">Close</span>
              </button>
              <h4 className="modal-title">Recovery password</h4>
            </div>
            <div className="modal-body">
              <p>Type your email account</p>
              <input type="email" name="recovery-email" id="recovery-email" className="form-control" autoComplete="off" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-custom">Recovery</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
