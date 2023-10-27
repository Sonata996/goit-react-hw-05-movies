import { Suspense, useEffect, useState} from "react";
import {  Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom"
import { serviceApiMovieId } from "service/serviceApi";
import { format } from 'date-fns'
import { BiArrowBack } from "react-icons/bi";




export const MovieElemInfo = () =>{
    const params = useParams()
    const [movie, setMovie] = useState()


    const location = useLocation();

useEffect(()=>{
    async function getApiMovieId() {
        try{
            const getApi = await serviceApiMovieId(params.movieId)
            setMovie(getApi)

        }catch{
            
        }
    }
    getApiMovieId();
}, [params.movieId]);

    return(
        <div> 
            {movie && (
                <>
        <div>
            <div>
                <Link to='/'>
                <BiArrowBack />
                    <p>Go back</p>
                </Link>
                
            </div>
            <div>
                <img src={movie.poster_path} alt={`"${movie.original_title}" Poster path`} /> 
            </div>

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
         </div>
         <div>
            <h4>Additional information</h4>
            {/* <ul>
                <li><Link to={`/movies/${movie.id}/cast`} state={location}>Cast</Link></li>
                <li><Link>Crew</Link> </li>
            </ul> */}
            <nav>
              <NavLink to="cast" state={location.state}>
                Cast
              </NavLink>
              <NavLink to="reviews" state={location.state}>
                Reviews
              </NavLink>
            </nav>

            <Suspense fallback={<div> <h1>dfsdfgsdssdfgvdfsdvfs</h1></div>}>
            <Outlet />
          </Suspense>
         </div>
            </>
            )}
            
        </div>
    )
}