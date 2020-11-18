import React from 'react'
import {Map ,TileLayer} from 'react-leaflet';
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";
const casesTypeColors = {
    cases: {
      hex: "#3498DB",
      multiplier: 800,
    },
    recovered: {
      hex: "#2ECC71",
      multiplier: 1000,
    },
    deaths: {
      hex: "#F44336",
      multiplier: 1500,
    },
  };
  const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          
    <div className="info-name" style={{fontWeight:'500',fontSize:'20px',marginBottom:'10px'}}><img src={country.countryInfo.flag} width="40px" height="30px"  alt="flag"></img>  {' '}{country.country}</div>
          <div >
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div>
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div>
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));  

const Worldmap = ({countries,casesType,center,zoom}) => {
    return (
        <div className="map">
            <Map center={center} zoom={zoom} >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {showDataOnMap(countries, casesType)}
</Map>
      
    </div>
            
        
    )
}

export default Worldmap
