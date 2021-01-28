import React from 'react';
import {Link} from 'react-router-dom';

import mapMarkerImg from '../images/map-marker.svg';
import {FiPlus} from 'react-icons/fi';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/charity-events-map.css';

function charityEventsMap(){
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

      <MapContainer
        center={[-6.5983908,-39.060646]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      </MapContainer>

      <Link to="" className="create-charity-events">
        <FiPlus size={32} color="#FFF"/>
      </Link>
    </div>
  );
}

export default charityEventsMap;