import React, { useState, useEffect } from 'react'
import axios from 'axios';
import News from './News';
import '../../styles/HomeStyles/Home.css';

function Home() {
    const [esports, setEsports] = useState([])
    const [currentSelection, setCurrentSelection] = useState('esports')

    useEffect( ()=> {
        axios.get(`https://api.henrikdev.xyz/valorant/v1/website/en-us?filter=${currentSelection}`)
            .then(res => {
                setEsports(res.data.data.slice(0, 9))

            })
            .catch(err => console.log({err}))
    },[currentSelection])
    
    const handleSelection = (ev) => {
        ev.preventDefault()
        setCurrentSelection(ev.target.value)
    }

  return (
    <div className='home-view'>
        <div className='landing'> 
            <h1> Welcome to Valorant for Noobs.</h1>
            <p>We're glad to see your interest for improving at valorant</p>
        </div>

        <div className='news-section'> 
            <h3>News Section</h3>
            <form> 
                <select value={currentSelection} onChange={(ev)=> handleSelection(ev) }> 
                    <option value='announcements'> Announcements</option>
                    <option value='esports'> Esports</option>
                    <option value='game_updates'> Game Updates </option>
                </select>
            </form>
            <News news={esports}/>
        </div>
    </div>
  )
}

export default Home