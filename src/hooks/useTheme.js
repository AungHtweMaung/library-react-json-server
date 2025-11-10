import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext";


let useTheme = () => {
    let contexts = useContext(ThemeContext);

    if (contexts === undefined) {
        new Error('Theme Context should be used in theme');
    }

    return contexts; 


}

export default useTheme;