import React, { useEffect, useState } from 'react';
import style from './styles.module.css';
import { Card } from '../Card';
import { useCards } from '../../hooks/useCards';

const Game = () => {
	const { data, loading } = useCards();
	const [cardSelected, setCardSelects] = useState([]);

	const handleCard = (idCard) => {
		setCardSelects((prev) => [...prev, idCard]);
	};

	useEffect(() => {
		console.log(cardSelected);
		if (cardSelected.length === 2) {
			setCardSelects([])
		}
	}, [cardSelected]);

	return (
		<>
			{loading && <h1>CARGANDO...</h1>}
			<div className={style.contain}>
				<div className={style.cards}>
					{data.map((card, i) => {
						return <Card key={card.id + "-" + i} url={card.image} name={card.name} id={card.id} flipped={card.flipped} handleCard={handleCard}/>;
					})}
				</div>
				<div className={style.infogame}></div>
			</div>
		</>
	);
};

export { Game };
