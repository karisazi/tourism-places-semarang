import React from 'react';
import { useParams } from 'react-router'
import dataWisata from "../../data/pariwisata-kab-semarang.json";
import Slider from "../../components/Slider";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {Icon} from "leaflet";
import {Typography} from "@material-ui/core";
import ScrollToTop from "../../components/ScrollToTop";
import './DetailWisata.css';


export const icon = new Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconSize: [20, 35],
});

export default function Detail() {
    const { id } = useParams()
    console.log(id);
    
    
  return (
    <>
      <ScrollToTop/>
      <Slider idWisata={id}/>
      <div className='detail-wisata'>
        <Typography variant="h4">{dataWisata.wisata[id-1].detail.NAMA}</Typography>
        <Typography gutterBottom variant='subtitle1'>{dataWisata.wisata[id-1].detail.ALAMAT}</Typography> 
        <Typography paragraph variant="body2" align='justify'>{dataWisata.wisata[id-1].detail.DESKRIPSI}</Typography>
      </div>

      <div className="containerBig">
        <MapContainer 
          center={[dataWisata.wisata[id-1].geometri.koordinat[0], dataWisata.wisata[id-1].geometri.koordinat[1]]} 
          zoom={13}
          className="static-map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

            <Marker
              key={dataWisata.wisata[id-1].detail.ID_WISATA}
              position={[
                dataWisata.wisata[id-1].geometri.koordinat[0],
                dataWisata.wisata[id-1].geometri.koordinat[1]
              ]}
              icon={icon} 
            >

              <Popup>
                <h3>{dataWisata.wisata[id-1].detail.NAMA}</h3>
              </Popup>

            </Marker>

        </MapContainer>
        </div>
    </>
  );
}

