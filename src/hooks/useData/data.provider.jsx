import { DataContext } from "./data.context";
import React, { useState } from "react";


export const DataProvider = ({ children }) => {
    const [data, setData] = useState([])
    const context = {
        data,
        fetchInitialData: () => {
            fetch("http://localhost:3000/contractors")
                .then(response => response.json())
                .then(data => setData(data))
        },
        setData: (newData) => {
            setData(newData)
        }
    }

    return <DataContext.Provider value={context}>{children}</DataContext.Provider>
}