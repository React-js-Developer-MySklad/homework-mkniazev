import {useContext} from "react";
import {DataContext} from "./data.context";

export const useData = () => {
    const context = useContext(DataContext);
    if (context === null) {
        throw Error('useData hook outside DataProvider')
    }
    
    return context;
}