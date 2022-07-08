import { createContext } from "react";

// Creates a theme object to use with context
export const themes = {
    light: {
        backgroundColor: '#F6F5F5',
        color: 'black'
    },
    dark: {
        backgroundColor: '#221D1D',
        color: 'white'
    }
};

const ThemeContext = createContext(themes.light);

export default ThemeContext;