// import {useFetch} from '../../hooks/useFetch.js';
import './Home.css';
import RecipeList from '../../components/RecipeList.js';
// import { useEffect, useState } from 'react';
// import { collection , getDocs } from 'firebase/firestore';
// import { db } from '../../firebase/config.js';
import { useCollection } from '../../hooks/useCollection';


export default function Home() {
    // const {data , isLoading , error} = useFetch('http://localhost:3000/recipes');
    // const [data , setData] = useState(null);
    // const [isLoading , setIsLoading] = useState(false);
    // const [error , setError] = useState(false);

    // useEffect(() => {
    //     setIsLoading(true);

    //     const ref = collection(db , 'recipes')
    //     getDocs(ref)
    //         // .then((snapshot) => {console.log(snapshot);})
    //         .then((snapshot) => {
    //             if(snapshot.empty){
    //                 setError('No Recipe To Load . . . ')
    //                 setIsLoading(false)
    //             }
    //             else{
    //                 let result = [] ;
    //                 snapshot.docs.forEach(doc => {
    //                     // console.log(doc);
    //                     result.push({id : doc.id , ...doc.data()})
    //                 })
    //                 setData(result)
    //                 setIsLoading(false)
    //             }
    //         })
    //         console.log(data);
    // } , [data])


    const { collectionData : data , isLoading , error} = useCollection('recipes');

    return (
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isLoading && <p className='loading'>Loading . . .</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}