import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { serviceApiMovieCredits } from "service/serviceApi"
import { ElemUlCast, ProfilePath, UlCast } from "./Cast.styled"




export default function Cast (){
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
            {infoCredits && (
            <UlCast>
            {infoCredits.cast.map(elem =>{
                return (
                    <ElemUlCast key={elem.id}>
                    {elem.profile_path && 
                    <ProfilePath src={`https://image.tmdb.org/t/p/w500/${elem.profile_path}`} />}
                    <h5>{elem.name}</h5>
                    <h5>Character: {elem.character}</h5>
            </ElemUlCast>)
            })}
            </UlCast>)}
        </div>
    )
}