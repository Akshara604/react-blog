import {createContext,useEffect,useReducer} from "react";
import Reducer from "./Reducer"

const INITIAL_STATE = {
    user:JSON.parse(localStorage.getItem("user")) || null, //if there is a user in localStorage it takes or it's null
    isFetching:false,
    error:false,
}

export const Context = createContext(INITIAL_STATE);



export const ContextProvider = ({children}) =>{
    //children is all the components
    const [state,dispatch] = useReducer(Reducer, INITIAL_STATE); //It's gonna update the initial state

    //Using local storage to svae the user even when refreshed
    useEffect(() =>{
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user]); //whenever the state.user changes , the useEffect is applied

    return <Context.Provider value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
    }}>{children}</Context.Provider>
}