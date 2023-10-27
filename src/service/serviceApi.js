import axios from 'axios';


const KeyApi= '891cc72aafe06da2b3bebc54fcfb98d7'
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'


export const serviceAPITrending = async () =>{
   const getApi = await axios.get(`trending/movie/day?api_key=${KeyApi}&language=en-US`)
    return getApi.data
}

export const serviceAPISearch = async (value) =>{
    const getApi = await axios.get(`/search/movie?api_key=${KeyApi}&query=${value}&language=en-US`)
     return getApi.data
 }

export const serviceApiMovieId = async (elemId) =>{
    const getApi = await axios.get(`movie/${elemId}?language=en-US&api_key=${KeyApi}`)
    return getApi.data
}

export const serviceApiMovieCredits = async (elemId) =>{
    const getApi = await axios.get(`movie/${elemId}/credits?language=en-US&api_key=${KeyApi}`)
    return getApi.data
}

export const serviceApiMovieReviews = async (elemId) =>{
    const getApi = await axios.get(`movie/${elemId}/reviews?language=en-US&api_key=${KeyApi}`)
    return getApi.data
}
