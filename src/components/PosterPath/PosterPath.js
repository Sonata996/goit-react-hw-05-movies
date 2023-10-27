import { ConteinerPoster, Poster } from "./PosterPath.style"


export const PosterPath = ({movie}) =>{
    return(
        <ConteinerPoster>
        <Poster src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`"${movie.original_title}" Poster path`} /> 
    </ConteinerPoster> 
    )
}