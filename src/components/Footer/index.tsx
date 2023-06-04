import React, { useState } from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer: React.FC = () => {
  return (
    <footer id="Footer" className="page-footer font-small stylish-color-dark pt-4">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <h5 className="text-uppercase font-weight-bold mt-3 mb-4">Centro Acadêmico de Gestão da Informação</h5>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '70px' }} />
            <p>
              Estamos sempre em busca para trazer a melhor experiência acadêmica para os nossos membros do curso de Gestão da Informação da UFPR!
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none" />
          <div id="link10" className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Nossos Produtos</h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '70px' }} />
            <p>
              <a href="#!">Camiseta</a>
            </p>
            <p>
              <a href="#!">Moletom</a>
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none" />
          <div id="link10" className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Links úteis</h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '70px' }} />
            <p>
              <a href="http://www.sociaisaplicadas.ufpr.br/portal/decigi/">Decigi</a>
            </p>
            <p>
              <a href="http://www.sociaisaplicadas.ufpr.br/portal/decigi/graduacao/matriz-e-ementas/">Grade curricular</a>
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none" />
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase font-weight-bold">Contatos</h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
            <p>
              <i className="fas fa-home mr-3"></i> cagiufpr@gmail.com
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> Av. Prefeito Lothário Meissner, 632 - Jardim Botânico
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i> 41 99999-9999
            </p>
          </div>
        </div>
      </div>
      <hr />
      <ul className="list-unstyled list-inline text-center py-2">
        <li className="list-inline-item">
          <h5 className="mb-1">Conheça o nosso site!</h5>
        </li>
        <li className="list-inline-item">
          <a href="Cadastro" className="btn btn-outline-danger btn-rounded">
            Registrar-se
          </a>
        </li>
      </ul>
      <hr />
      <div className="hover-effect1">
        <ul style={{ backgroundColor: '#000' }} className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a href="https://www.facebook.com/codewithfaraz" title="Facebook">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.twitter.com/codewithfaraz" title="Twitter">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.instagram.com/codewithfaraz" title="Instagram">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.youtube.com/@codewithfaraz" title="Youtube">
              <i className="fa fa-youtube"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#." title="Github">
              <i className="fa fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <div style={{ backgroundColor: '#b3b3cc' }} className="footer-copyright text-center py-3">
        Copyright© 2023: Made by Guilherme Moraes and Gabriel Andreoli
      </div>
    </footer>
  );
}

export default Footer;
