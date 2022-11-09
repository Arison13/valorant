import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Map from './Map';
import '../../styles/MapsStyles/MapsList.css';
import LoadingScreen from '../../components/LoadingScreen';

function MapsList() {
  const [maps, setMaps] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://valorant-api.com/v1/maps")
    .then(res => {
      setMaps(res.data.data)
      setLoading(false);
    }) 
    .catch(err => {
      console.log(err)
    })
  }, [])


    return (
      <div className='mapsList'>
        { loading && <LoadingScreen/> }
        
        {
          maps.map((map, idx) => {
            return (<Map map={map} key={idx} />)
          })
        
        }
      </div>
    )
  }

export default MapsList