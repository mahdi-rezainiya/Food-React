import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <Link to='/' className='brand'><h1>OpenCode Food</h1></Link>
                <Link to='/create' ><h1>Create Recipe</h1></Link>
            </nav>
        </div>
    )
}
