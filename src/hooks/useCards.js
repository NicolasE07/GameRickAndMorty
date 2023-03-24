import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCharacters } from './useCharacters';

export function useCards() {
	const { urls } = useCharacters();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
    const source = axios.CancelToken.source();
	const getCards = async () => {
		try {
			const response = await Promise.all(urls.map((url) => axios.get(url)));
			const characters = response.map((res) => res.data);
            const data = characters.map(character =>({...character, flipped: false}));
			const dataSorted = [...data, ...data].sort(()=> Math.random - 0.5);
            console.log(dataSorted);
            setData(dataSorted)
			setLoading(false);
		} catch (error) {
            console.log(error);
		} finally {
            setLoading(false)
		}   
	};

	useEffect(() => {
		if(data.length > 21){
			setData([])
		}
        getCards();
        return ()=>{
            source.cancel('Resquest Cancel')
        }
    }, [urls]);

	return { data, loading };
}
