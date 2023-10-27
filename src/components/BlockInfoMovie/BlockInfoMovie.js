import { format } from 'date-fns'


export const BlockInfoMovie = ({movie}) =>{
return(
    <div>
               <h1>
                    {movie.original_title}
                    <span>({format(new Date(movie.release_date), "yyyy")})</span>
                </h1>
                <h4>User Score: {movie.vote_average.toFixed(1)}%</h4>
                <h3>Overview</h3>
                <p>{movie.overview}</p> 
                <h3>Genres</h3>
                {movie.genres.map(elem => <span key={elem.id}>{elem.name}</span>)}
            </div>
)
}