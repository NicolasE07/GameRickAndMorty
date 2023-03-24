import React from 'react';
import style from './styles.module.css';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

const Home = () => {

	return (
		<div className={style.container}>
			<div className={style.containerlogo}>
				<img src={logo} alt="rick and morty" />
				<Link to="/start-game">
					<button type="button" className={style.button}>
						PLAY
					</button>
				</Link>
			</div>
		</div>
	);
};

export { Home };
