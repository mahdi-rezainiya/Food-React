import { Link } from 'react-router-dom';
import './Navbar.css';
import Searchbar from './Searchbar';
import { useTheme } from '../hooks/useTheme';


export default function Navbar() {

    // new
    const {color , changeColor} = useTheme();

    return (
        <div className="navbar" style={{backgroundColor : color}}>
            <nav onClick={() => changeColor('red')}>
                <Link to='/' className='brand'><h1>OpenCode Food</h1></Link>

                <Searchbar/>

                <Link to='/create' ><h1>Create Recipe</h1></Link>
            </nav>
        </div>
    )
}
