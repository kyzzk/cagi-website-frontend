import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div>
      <main className="main-content">
        <div className="title">
          <p>GESTÃO DA</p>
          <p>INFORMAÇÃO</p>
        </div>
        <p className="description">
          Adquira produtos exclusivos do curso de gestão da informação da UFPR.
          Produzidos e entregues exclusivamente pela equipe do centro acadêmico.
        </p>
      </main>
    </div>
  );
}

export default Home;
