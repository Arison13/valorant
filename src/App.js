import './App.css';
import { useState, useEffect} from 'react';
import axios from 'axios';
import AgentList from './pages/AgentDisplay/AgentList';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';import MapsList from './pages/MapsDisplay/MapsList';
import WeaponsList from './pages/WeaponsList';
import AgentInfo from './pages/AgentDisplay/AgentInfo';
import MatchDisplay from './pages/MatchDisplay';
import MapInfo from './pages/MapsDisplay/MapInfo';

function App() {
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
   <BrowserRouter> 
    <div className="App">
       <Header/>
       
      <Routes> 
        {/* Make Home Page for base route instead of having agentList inmediately */}
        
        <Route path='/' element={<AgentList agentData={agentData}/>} />
        
        {/* Agents Routes */}
        <Route path='/agents' element={<AgentList agentData={agentData}/>} />
        <Route path='/agents/:agentID' element={<AgentInfo />} />
       
       {/* Weapons Routes */}
        <Route path='/weapons' element={<WeaponsList />}/>
      
       {/* Maps Routes */}
        <Route path='/maps' element={<MapsList/>} />
        <Route path='/maps/:map' element={MapInfo} />

        {/* Match Routes */}
        <Route path='/:match' element={<MatchDisplay/>} />
      </Routes>
     
      { loading && <LoadingScreen/> }
    </div>
    </BrowserRouter>
  );
}

export default App;
