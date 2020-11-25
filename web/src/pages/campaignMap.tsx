import React from 'react';
import {Link} from 'react-router-dom';

import mapMarkerImg from '../images/map-marker.svg';
import {FiPlus} from 'react-icons/fi';
import '../styles/pages/campaign-map.css';

function campaignMap(){
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="MapAid"/>

          <h2>Escolha uma campanha para saber mais e colaborar.</h2>
          <p>Estão esperando por você :)</p>

        </header>

        <footer>
          <strong>Cedro </strong>
          <span>Ceará</span>
        </footer>

      </aside>

      <div><h1>Listar aqui</h1></div>

      <Link to="" className="create-campaign">
        <FiPlus size={32} color="#FFF"/>
      </Link>
    </div>
  );
}

export default campaignMap;