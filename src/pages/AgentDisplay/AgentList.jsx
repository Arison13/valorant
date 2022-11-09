import React, { useState, useEffect } from 'react'
import '../../styles/AgentsList.css';
import Agent from '../../components/Agent';
import axios from 'axios';
import LoadingScreen from '../../components/LoadingScreen';

export default function AgentList() {
    const [agentData, setAgentData] = useState([])
    const [loading, setLoading] = useState(true)

  useEffect(()=> {
   axios.get("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
    .then(res => {
      setLoading(false)
      setAgentData(res.data.data)
    }) 
    .catch(err => {
      console.log(err)
      setLoading(false)
    })
   }, [])

    return (
    <div className='agentsList'> 
        { loading && <LoadingScreen/> }

        {
            agentData.map((agent) => {
            return ( <Agent key={agent.uuid} agent={agent}/>)
            })
        }
    </div>
  )
}
