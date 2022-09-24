import React from 'react';
import style from './styles.module.css'
import logo from '../../assets/img/logo.png'
const Home = () => {
    return ( 
        <div className={style.container}>
            <div className={style.containerlogo}>
                <img src={logo} alt="" />
                <button>PLAY</button>
            </div>
        </div>
     );
}
 
export {Home};