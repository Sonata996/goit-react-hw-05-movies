import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { serviceApiMovieReviews } from "service/serviceApi"




export default function Reviews(){
    const params = useParams()
    const [reviews, setReviews] = useState([])


useEffect(() =>{
    async function getApiReviews() {
        try{
            const getApi = await serviceApiMovieReviews(params.movieId)
            setReviews(getApi)
        }catch{

        }
        
    }
    getApiReviews()
},[params.movieId])
    

    return(
        <div>
            {reviews
            && reviews.length !== 0 
            && reviews.results.length === 0 &&(
            <>
                <div>
                    <p>
                    We don't have any reviews for this movie
                    </p>
                </div>
            </>
            )}
            {reviews.length !== 0 && reviews.results.map(elem => <li key={elem.id}>
            <h3>Author: {elem.author}.</h3>
                <p>{elem.content}</p>
            </li>)}
            
        </div>
    )
}