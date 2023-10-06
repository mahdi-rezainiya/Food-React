import { useContext } from 'react';
import { ThemContext } from '../context/ThemContext';

export const useTheme = () => {
    // const {color} = useContext(ThemContext);
    const context = useContext(ThemContext);

    if(context === undefined){
        throw new Error("useTheme() must bet used Inside a ThemePro")
    }
    return context
}