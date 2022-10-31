import React from 'react'
import '../styles/LoadingScreen.css';

function LoadingScreen() {
  return (
    <div className='loading-main'> 
     <h4> Your favorite Valorant Data is Loading. 
      <br/>Keep your crosshair ready and hold this angle for one more second.</h4>
      {/* Put link to watch some valorant video while you wait */}
    </div>
  )
}

export default LoadingScreen