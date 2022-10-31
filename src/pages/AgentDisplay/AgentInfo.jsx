import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../../styles/AgentDisplay.css';
import { useParams } from 'react-router-dom';

function AgentInfo() {
    const {agentID} = useParams()
    const [agent, setAgent] = useState([])
    const [agentAbilities, setAgentAbilities] = useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect(()=> {
        axios.get(`https://valorant-api.com/v1/agents/${agentID}`)
         .then(res => {
            setLoading(false)
            setAgent(res.data.data)
            setAgentAbilities(res.data.data.abilities)
         }) 
         .catch(err => {
           console.log(err)
           setLoading(false);
         })
      
        }, [])

  return (
    <div>
        {loading ? <h3> Agent information is Loading...</h3> : 
        
        <div className='agentDisplay'> 
            <section 
                style={ {'--color-action-bg': `#${agent.backgroundGradientColors[0]}`}} 
                className='display-left'
            > 
                <div className='agent-picture-main'> 
                    <figure className='agent-portrait'> 
                        <img className='main-picture' src={agent.fullPortrait} alt={agent.displayName} />
                        <figcaption>{agent.displayName}</figcaption>
                    </figure>
                </div>                
                <div className='role-info'> 
                    <div className='role-top'> 
                        <span className='agent-role'> {agent.role.displayName} </span> 
                        <img className='role-picture' src={agent.role.displayIcon} alt={agent.role.displayName}/> 
                    </div>
                    <p className='agent-description'>{agent.description}</p>
                </div>
            </section>

            <section className='display-right'> 
                <div className='abilities'>
                    {agentAbilities.map(a => {
                        return ( 
                        <div 
                        key={a.slot} 
                        className='ability'
                        style={{'--color-action-bg': `#${agent.backgroundGradientColors[0]}`}}
                        > 
                            <div className='ability-image'> 
                                <img src={a.displayIcon} alt={a.displayName}/>
                            </div>
                            <div className='ability-description'> 
                                <h2>{a.displayName}</h2>
                                <p>{a.description}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </section>
        </div>

        }
    </div>
  )
}

export default AgentInfo