import { useTheme } from '../hooks/useTheme';
import './RecipeList.css';
import { Link } from 'react-router-dom' ;

export default function RecipeList({recipes}) {
    const {mode} = useTheme()

    return (
        <div className="recipe-list">
            {recipes.map(recipe => (
                <div key={recipe.id} className={`card ${mode}`}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make</p>
                    <div>{recipe.method && recipe.method.substring(0, 100)}...</div>
                    <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                </div>
            ))
        }
    </div>
    )
}
