import { useTheme } from '../hooks/useTheme';
import './ThemeSelector.css';
import modeIcon from '../assets/mode-icon.svg';

const themeColors = ["#58249c" , "#249c6b" , "#b70233"];

export default function ThemeSelector() {
    const {changeColor , changeMode , mode} = useTheme();
    
    // newer
    const toggleMode = () => {
        changeMode(mode === "dark" ? "light" : "dark")
    }
    console.log(mode);

    return (
    <div className='theme-selector'>
        <div className="mode-toggle">
            <img src={modeIcon} 
            onClick={toggleMode}
            style={{filter : mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}
            alt={mode}
            />
        </div>
        <div className="theme-buttons">
        {themeColors.map(color => (
            <div 
            key={color} 
            onClick={() => changeColor(color)} 
            style={{background : color }} 
            />
        ))}
        </div>
    </div>
    )
}
