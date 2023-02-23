import './App.css'
import AgentList from './pages/AgentDisplay/AgentList'
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MapsList from './pages/MapsDisplay/MapsList'
import AgentInfo from './pages/AgentDisplay/AgentInfo'
// import MatchDisplay from './pages/MatchDisplay';
import Home from './pages/HomeDisplay/Home'
import { SearchPage } from './pages/searchPage/search-page'

function App() {

  return (
   <BrowserRouter> 
    <div className="App">
      <div className='header'> 
       <Header/>
       </div>
      <Routes> 
        <Route path='/' element={<Home/>} />
        <Route path='/agents' element={<AgentList/>} />
        <Route path='/agents/:agentID' element={<AgentInfo />} />
        <Route path='/maps' element={<MapsList/>} />
        {/* Still needs to be developed */}
        <Route path='/search' element={<SearchPage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
