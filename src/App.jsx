import './App.css'
import axios from 'axios'
import {Home} from './Components/Home'
import { useEffect } from 'react';

function App() {
  const getCharacters = async ()=>{
    const {data} = await axios.get('https://rickandmortyapi.com/api/character');
    console.log(data)
  }

  useEffect(()=>{
    getCharacters()
  },[])

  return (
    <div>
      <Home/>
    </div>
  )
}

export default App
