import React from 'react';
import styles from './styles.module.css';

const Card = ({id, url, name, flipped, handleCard}) => {
	return (
		<div className={`card ${flipped ? 'flipped' : ''}`} onClick={()=> handleCard(id)}>
			<img src={url} alt={name} />
		</div>
	);
};

export { Card };
