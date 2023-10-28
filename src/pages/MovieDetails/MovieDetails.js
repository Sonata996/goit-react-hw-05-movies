import { Suspense, useEffect, useState} from "react";
import { Outlet, useLocation, useParams } from "react-router-dom"
import { serviceApiMovieId } from "service/serviceApi";

import { GoBack } from "components/GoBack/CoBack";
import { PosterPath } from "components/PosterPath/PosterPath";
import { BlockInfoMovie } from "components/BlockInfoMovie/BlockInfoMovie";
import { ConteinerInfoBlock } from "./MovieDetails.styled";
import { ListAdditionalInfo } from "components/AdditionalInfo/AdditionalInfo";





export default function MovieElemInfo(){
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
            <GoBack location={location}/>

        <ConteinerInfoBlock>
            <PosterPath movie={movie}/>
            <BlockInfoMovie  movie={movie}/>
         </ConteinerInfoBlock>
         <div>
            <h4>Additional information</h4>

            <ListAdditionalInfo location={location}/>

            <Suspense fallback={<div> <h1>Page error. Please reload again</h1></div>}>
            <Outlet />
          </Suspense>
         </div>
            </>
            )}
            
        </div>
    )
}