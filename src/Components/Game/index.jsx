import React from 'react';
import style from './styles.module.css';

const Game = () => {
	const card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

	return (
		<div className={style.contain}>
			<div className={style.cards}>
				{card.map((item, i) => {
					return (
						<div key={i} className={style.card}>
							{item}
						</div>
					);
				})}
			</div>
            <div className={style.infogame}>


            </div>
		</div>
	);
};

export { Game };
