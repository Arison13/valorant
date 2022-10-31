import React from 'react'
import '../../styles/AgentsList.css';
import Agent from '../../components/Agent';

export default function AgentList({agentData}) {
    
    return (
    <div className='agentsList'> 
        {
            agentData.map((agent) => {
            return ( <Agent key={agent.uuid} agent={agent}/>)
            })
        }
    </div>
  )
}
