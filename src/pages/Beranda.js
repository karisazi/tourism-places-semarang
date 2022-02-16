import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet"; 
import {Icon} from "leaflet";
import dataWisata from "../data/pariwisata-kab-semarang.json";
import { NavLink } from 'react-router-dom'

export const icon = new Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconSize: [20, 35]
});

export default function Beranda(props) {
  const { history } = props
  
  return (
    <MapContainer center={[-7.20667000, 110.44139000]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {dataWisata.wisata.map(pariwisata => (
        <Marker
          key={pariwisata.detail.ID_WISATA}
          position={[
            pariwisata.geometri.koordinat[0],
            pariwisata.geometri.koordinat[1]
          ]}
          icon={icon} 
        >

          <Popup >
            <div>
              <NavLink
                to={`/detail-wisata/${pariwisata.detail.ID_WISATA}`}
                style={{textDecoration: 'none'}}
                onClick={() => history.push(`/detail-wisata/${pariwisata.detail.ID_WISATA}`)}
              >
                <h2 className="all-wisata">{pariwisata.detail.NAMA}</h2>
              </NavLink>
              <NavLink
                to={`/detail-wisata/${pariwisata.detail.ID_WISATA}`}
                style={{textDecoration: 'none'}}
                onClick={() => history.push(`/detail-wisata/${pariwisata.detail.ID_WISATA}`)}
              >
                <p className="all-wisata">{pariwisata.detail.ALAMAT}</p>
              </NavLink>
              <NavLink
                to={`/detail-wisata/${pariwisata.detail.ID_WISATA}`}
                onClick={() => history.push(`/detail-wisata/${pariwisata.detail.ID_WISATA}`)}
              >
                <img src={pariwisata.detail.FOTO[0]} className="img" alt="foto-wisata"/>
              </NavLink>
            </div>
          </Popup>
          
        </Marker>
        
      ))}

    </MapContainer>
  );
}



