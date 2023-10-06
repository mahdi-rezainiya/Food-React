import { useNavigate } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';
import './Create.css';
import {useEffect, useState} from 'react';
export default function Create() {
    const [title , setTitle] = useState('');
    const [method , setMethod] = useState('');
    const [cookingTime , setCookingTime] = useState('');
    const [newIngredient , setNewIngredient] = useState('');
    const [ingredients , setIngredients] = useState([]);

    // Post Data
    const url = 'http://localhost:3000/recipes';
    const {postData , data, error} = useFetch(url , 'POST');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(title , method , cookingTime , ingredients);
        postData({title , ingredients , method , cookingTime : cookingTime + ' minutes'})
        // setTitle('')
        // setIngredients([])
        // setMethod('')
        // setCookingTime('')
        // setTimeout(() => {navigate('/')} , 2000)
    }

    const handleAdd = (e) => {
        e.preventDefault()

        if(newIngredient && !ingredients.includes(newIngredient)){
            setIngredients(prevIngredients => [...prevIngredients , newIngredient])
        }
        setNewIngredient('')
    }

    useEffect(() => {
        if(data){
            navigate('/')
        }
    } , [data , navigate])

    return (
        <div className="create">
            {error && <p>{error}</p>}
            <h2 className='page-title'>Add a New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe Title :</span>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required />
                </label>

                <label>
                    <span>Recipe Ingredients :</span>
                    <div className="ingredients">
                        <input type="text" onChange={(e) => setNewIngredient(e.target.value)} value={newIngredient}  />
                        <button className='btn' onClick={handleAdd}>Add</button>
                    </div>
                </label>

                <p>Current Ingredients : {ingredients.map(i => <em key={i}>{i} , </em>)}</p>

                <label>
                    <span>Recipe Method :</span>
                    <textarea onChange={(e) => setMethod(e.target.value)} value={method} required />
                </label>

                <label>
                    <span>Cooking Time(m) :</span>
                    <input type="number" onChange={(e) => setCookingTime(e.target.value)} value={cookingTime} required />
                </label>

                <button className="btn">Submit</button>
            </form>
        </div>
    )
}