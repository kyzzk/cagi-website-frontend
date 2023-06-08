import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; 
import { Facebook, Instagram, Twitter } from '@mui/icons-material';


const Footer = () => {

    return (
        <div className="footer">
            <div className="left">
                <h1 className="title-footer">CAGI</h1>
                <p className="text" style={{color: '#A2A2A2'}} >Adquira produtos exclusivos de forma rápida!</p>
                <div className="icons">
                    <Twitter className="icon" />
                    <Instagram className="icon" />
                    <Facebook className="icon" />
                </div>
            </div>

            <div className="center">
                <p className="terms">Termos e Condições</p>
                <p className="disclaimer">
                Ao utilizar o site de vendas do CAGI, você concorda em cumprir as leis aplicáveis, fornecer informações precisas, e reconhece que o CAGI não se responsabiliza por danos decorrentes do uso do site. O CAGI reserva-se o direito de alterar os termos sem aviso prévio.
                </p>
                <p className="madeBy">
                    <a style={{color: 'white'}} href="https://twitter.com/kazedgaf" target="_blank" rel="noopener noreferrer">
                        Made with ❤️ by Guilherme and Gabriel
                    </a>
                </p>
            </div>


            <div className="right">
                <div className="options">
                    <h2 className='h2Styled'>Opções</h2>
                    <ul>
                        <li><Link style={{color: '#A2A2A2'}} to="/login">Logar</Link></li>
                        <li><Link style={{color: '#A2A2A2'}} to="/register">Registrar</Link></li>
                        <li><Link style={{color: '#A2A2A2'}} to="/register">Equipe</Link></li>
                        <li><Link style={{color: '#A2A2A2'}} to="/register">FAQ</Link></li>
                    </ul>
                </div>
                <div className="services">
                    <h2 className='h2Styled'>Produtos</h2>
                    <ul>
                        <li><Link style={{color: '#A2A2A2'}} to="#">Camisetas</Link></li>
                        <li><Link style={{color: '#A2A2A2'}} to="#">Moletons</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
