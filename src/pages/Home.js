import { useState } from "react"
import { serviceAPITrending } from "service/serviceApi"
import { ElemListTranding } from "components/ElemListTranding/ElemListTranding"



export const Home = () =>{
    const [movie, setMovie] = useState([])

    async function addTrendingList() {
    try{
        const listTranding = await serviceAPITrending()
        setMovie(listTranding.results)
    }catch{

    }finally{

    }
}


if (movie.length === 0) {
addTrendingList()
}

    return(
        <div>
            <h1>Trending today</h1>
        
        <ul>
            {movie.map(elem => <ElemListTranding key={elem.id} element={elem}/>)}
        </ul>
    </div>
    )
}