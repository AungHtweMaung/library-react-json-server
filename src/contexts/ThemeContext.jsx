// ThemeContext
// ThemeContext Provider

import { act, createContext, useReducer } from "react";

const ThemeContext = createContext();


// we don't need to build this function again while component is re-rendered. so put outside component
let ThemeReducer = (state, action) => {
    switch (action.payload) {
        case "dark":
            return { ...state, theme: action.payload };
        case "light":
            return { ...state, theme: action.payload };
        default:
            return state;
    }
}

const ThemeContextProvider = ({ children }) => {


    // ThemeReducer function is worked when update. second parameter is state 
    // state is theme : light, when dispatch is run, ThemeReducer function is called. 
    let [state, dispatch] = useReducer(ThemeReducer, {
        theme: 'light'
    })

    let changeTheme = (theme) => {
        console.log(theme);
        // action = type + payload  {type, payload}
        dispatch({type : 'CHANGE_THEME', payload : theme});
    }


    return (
        <ThemeContext.Provider value={{ ...state, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider }
