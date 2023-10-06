import { useParams } from 'react-router-dom';
import './Recipe.css';
import { useFetch } from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme';

export default function Recipe() {
    const {id} = useParams();
    const url = 'http://localhost:3000/recipes/' + id ;
    const {data:recipe , isLoading , error} = useFetch(url);
    const {mode} = useTheme();
    return (
        <div className={`recipe ${mode}`}>
            {error && <p className='error'>{error}</p>}
            {isLoading && <p className='loading'>Loading . . .</p>}
            {recipe && (
                <>
                    <h2 className='page-title'>{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime}</p>
                    <ul>
                        {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                    </ul>
                    <p className='method'>{recipe.method}</p>
                </>
            )}
        </div>
    )
}