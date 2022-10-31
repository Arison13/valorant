import React from 'react';
import '../../styles/MapsStyles/Map.css';
import { Link } from 'react-router-dom'
function Map({map}) {
  return (
    <Link 
        to={`/maps/${map.uuid}`}
        className='map-wrapper'
    >
        
        <div className='map'>
            <div className='map-top'> 
                <img className='map-image' src={map.splash} alt={map.displayName} />
                <p className='map-coordinates'> {map.coordinates} </p>
            </div>
            <p className='map-name'> {map.displayName}</p>
        </div>
    </Link>
  )
}

export default Map