import React from 'react';
import {FiArrowRight} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import '../styles/pages/landing.css';
import logoImg from '../images/logo.png';


function Landing(){
  return(
    <div id="page-landing">
      <div className="content-wrapper">
          <img src={logoImg} alt="MapAid"/>
          
          <main>
            <h1>Leve ajuda para alguém</h1>
            <p>Faça sua parte e mude a vida de muitas pessoas.</p>
          </main>

          <div className="location">
            <strong>Cedro</strong>
            <span>Ceará</span>
          </div>

          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
          </Link>
      </div>
    </div>
  );
}

export default Landing;