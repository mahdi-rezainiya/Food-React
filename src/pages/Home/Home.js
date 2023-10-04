import {useFetch} from '../../hooks/useFetch.js';
import './Home.css';
import RecipeList from '../../components/RecipeList.js';

export default function Home() {
    const {data , isLoading , error} = useFetch('http://localhost:3000/recipes');
    return (
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isLoading && <p className='loading'>Loading . . .</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}