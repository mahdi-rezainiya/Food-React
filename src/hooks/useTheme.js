import { useContext } from 'react';
import { ThemContext } from '../context/ThemContext';

export const useTheme = () => {
    
    const context = useContext(ThemContext)

    if(context === undefined){
        throw new Error("useTheme() must be used Inside a ThemePro")
    }
    return context
}