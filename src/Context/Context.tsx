import { useContext,createContext, useState } from "react";

interface props {
    state: boolean;
    toggleState: () => void;
}
export const StateContext = createContext<props | null>(null);
export const StateProvider = ({children} : any) => {
    const [state, setState] = useState(true);
    const toggleState = () => {
        setState(!state)
    }
    return(
        <StateContext.Provider value={{state, toggleState}}>
            {children}
        </StateContext.Provider>
    )
}