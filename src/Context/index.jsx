import { createContext, useState } from 'react';


export const CharactersContext = createContext()


export const CharactersProvider =({children})=>{
    const [setLoading, loading] = useState(false)
    const [urls, setUrls] = useState(false);


    return(
        <CharactersContext.Provider value={{loading, setLoading, urls, setUrls}}>
            {children}
        </CharactersContext.Provider>
    )
}