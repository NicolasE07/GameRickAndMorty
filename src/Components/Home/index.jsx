import React from 'react';
import style from './styles.module.css'
import logo from '../../assets/img/logo.png'
import axios, { Axios } from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Home = () => {

	const [characters, setCharacters]=useState(826);
    const [num, setNums] = useState([]);
    const consultar = async()=>{
        const {data} = await axios.get('https://rickandmortyapi.com/api/character')
        setCharacters(data.info.count)
        console.log(characters)
        for(let i =  0; i < 20; i++){
            const result = charactersRandom(characters)
            setNums((preState)=> [...preState, result]);
        }

    }
    const charactersRandom=(maxCha)=>{
      const min = Math.ceil(1);
      const max = Math.floor(maxCha);
     const result = Math.floor(Math.random() * (max - min) + min)
     return result; // The maximum is exclusive and the minimum is inclusive
    }
    
    useEffect(()=>{
        consultar()
    },[])

    return ( 

        <div className={style.container}>
            <div className={style.containerlogo}>
                <img src={logo} alt="" />
                <Link to='/start-game'>
                
                <button type='button' onClick={()=>console.log('hola')} className={style.button}>PLAY</button>
                </Link>
            </div>
        </div>

     );
}
 
export {Home};