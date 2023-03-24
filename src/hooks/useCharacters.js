import axios from 'axios';
import { useEffect, useState } from 'react';

export function useCharacters() {
    const [urls, setUrls] = useState([])
    const [nums, setNums] = useState(new Set())
	const source = axios.CancelToken.source();

	const getUrls = async () => {
		try {
			const { data } = await axios.get('https://rickandmortyapi.com/api/character');
            for (let i = 0; i < 10; i++) {
                const result = charactersRandom(data.info.count);
                setUrls((prev)=>[...prev, `https://rickandmortyapi.com/api/character/${result}`])
            }
		} catch (error) {
			if (axios.isCancel(error)) {
				console.log('Request canceled:', error.message);
			} else {
				console.log(error);
			}
		}
	};

	const charactersRandom = (maxCha) => {
		const min = Math.ceil(1);
		const max = Math.floor(maxCha);
		let result = Math.floor(Math.random() * (max - min) + min);
        while(nums.has(result)){
            result = Math.floor(Math.random() * (max - min) + min);
        }
        setNums((prev)=> new Set(prev.add(result)))
		return result; // The maximum is exclusive and the minimum is inclusive
	};

    useEffect(()=>{
        getUrls();
        return ()=>{
            source.cancel('Resquest Cancel')
        }
    },[])


    return {urls}
}
