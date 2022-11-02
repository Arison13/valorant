import React from 'react';
import '../../styles/MapsStyles/Map.css';

function Map({map}) {
  return (
    <div className='map-wrapper'>  
      <div className='map'>
          <div className='map-top'> 
              <img className='map-image' src={map.splash} alt={map.displayName} />
              <p className='map-coordinates'> {map.coordinates} </p>
          </div>
          <p className='map-name'> {map.displayName}</p>
      </div>
    </div>
  )
}

export default Map