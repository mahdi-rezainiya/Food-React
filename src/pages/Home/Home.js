import './Home.css';
import RecipeList from '../../components/RecipeList.js';
import { useCollection } from '../../hooks/useCollection';

export default function Home() {

    const { collectionData : data , isLoading , error} = useCollection('recipes');

    return (
        <div className='home'>
            {isLoading && <p className='loading'>Loading . . .</p>}
            {error && <p className='error'>{error}</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}