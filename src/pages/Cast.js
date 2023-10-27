import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { serviceApiMovieCredits } from "service/serviceApi"




export const Cast = () =>{
    const params = useParams()
    const [infoCredits, setInfoCredits] = useState()

    useEffect(()=>{
      async function foo() {
            try{
    const getApiInfoCredits = await serviceApiMovieCredits(params.movieId)
    setInfoCredits(getApiInfoCredits)
}catch{

}
}
foo()
},[params.movieId])


    return(
        <div>
            {infoCredits && (<ul>
            {infoCredits.cast.map(elem =>
            <li key={elem.id}>
                <img src={elem.profile_path} alt="Not Img"/>
                <h5>{elem.name}</h5>
                <h5>Character: {elem.character}</h5>
            </li>
            )}
            </ul>)}
        </div>
    )
}