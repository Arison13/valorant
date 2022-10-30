import React from 'react'
import '../styles/Agent.css'
import { Link } from 'react-router-dom';

export default function Agent({agent}) {
  
  return (
    
    <Link 
      className='agentWrapper' 
      style={ {'--color-action-shadow': `#${agent.backgroundGradientColors[0]}`}}
      to={`/agents/${agent.uuid}`}
    > 
    
    {/* Sets the background pic */}
      <div className='agent' >
        <div className='agent-top'>
          <img alt={agent.displayName} className="agent-picture" src={agent.bustPortrait}/>
          <p className='role'>{agent.role.displayName}</p>
        </div>
          <p className='agent-name'>{agent.displayName}</p>
      </div>
    </Link>

  )
}
