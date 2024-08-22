import { createContext } from 'react';

const ContractorAPIContext = createContext({
    getData: (callback) => {
        return fetch("http://localhost:3000/contractors")
        .then(response => response.json())
        .then(data => callback(data))
    },
})


export default ContractorAPIContext;