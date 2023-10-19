import { useParams } from 'react-router-dom';
import './Recipe.css';
// import { useFetch } from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme';
import { useEffect, useState } from 'react';
// import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config.js';


export default function Recipe() {
    const {id} = useParams() ;
    // const url = 'http://localhost:3000/recipes/' + id ;
    // const {data:recipe , isLoading , error} = useFetch(url) ;
    const {mode} = useTheme() ;

    const [recipe , setRecipe] = useState(null);
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState(false);

    // useEffect(() => {
    //     setIsLoading(true)

    //     const ref = doc(db , 'recipes' , id)
    //     getDoc(ref)
    //         .then((doc) => {
    //             if(doc.empty){
    //                 setError('NO Recipe To Load . . .')
    //                 setIsLoading(false)
    //             }
    //             else{
    //                 setIsLoading(false)
    //                 setRecipe(doc.data())
    //             }
    //         })
    // } , [])


    useEffect(() => {
        setIsLoading(true)

        const ref = doc(db , 'recipes' , id)

        const unsub = onSnapshot(ref , (snapshot) => {
            if(snapshot.empty){
                setError('NO Recipe To Load . . .')
                setIsLoading(false)
            }
            else{
                setIsLoading(false)
                setRecipe(snapshot.data())
            }
        })

        return () => unsub()

    } , [id])

    const handleClick = async () => {
        try{
            const ref = doc(db , 'recipes' , id)
            await updateDoc(ref , {
                title : 'something new'
            })
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div className={`recipe ${mode}`}>
            {error && <p className='error'>{error}</p>}
            {isLoading && <p className='loading'>Loading . . . </p>}
            {recipe && (
                <>
                    <h2 className='page-title'>{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime}</p>
                    <ul>
                        {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                    </ul>
                    <p className='method'>{recipe.method}</p>
                    <button onClick={handleClick}>Update the Title</button>
                </>
            )}
        </div>
    )
}