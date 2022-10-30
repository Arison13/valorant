import './App.css';
import { useState, useEffect} from 'react';
import axios from 'axios';
import AgentList from './pages/AgentList';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';import MapsList from './pages/MapsList';
import WeaponsList from './pages/WeaponsList';
import Agent from './components/Agent';
import AgentInfo from './pages/AgentInfo';

function App() {
  const [agentData, setAgentData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
   axios.get("https://valorant-api.com/v1/agents?isPlayableCharacter=true ")
    .then(res => {
      setLoading(false)
      setAgentData(res.data.data)
      console.log(res.data.data)
    }) 
    .catch(err => {
      console.log(err)
      setLoading(false)
    })
   }, [])

  return (
   <BrowserRouter> 
    <div className="App">
       <Header/>
       
      <Routes> 
        {/* Make Home Page for base route instead of having agentList inmediately */}
        <Route path='/' element={<AgentList agentData={agentData}/>} />
        <Route path='/agents' element={<AgentList agentData={agentData}/>} />
        <Route path='/weapons' element={<WeaponsList />}/>
        <Route path='/maps' element={<MapsList/>} />
        <Route path='/agents/:agentID' element={<AgentInfo />} />
      </Routes>
     
      { loading && <LoadingScreen/> }
    </div>
    </BrowserRouter>
  );
}

export default App;
