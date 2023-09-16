import React, { createContext, useContext, useState } from 'react'

export const DatabaseContext = createContext(null);


const DatabaseContextProvider = (props: any) => {
    const [ activePage, setActivePage] = useState("/");


    const value: any = {
        activePage, setActivePage
    };

    return (
        <DatabaseContext.Provider value={value}>
            {props.children}
        </DatabaseContext.Provider>
    )
}


export default DatabaseContextProvider