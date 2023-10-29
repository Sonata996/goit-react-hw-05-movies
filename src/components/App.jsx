import { Navigate, Route, Routes} from "react-router-dom";
import { Layout } from "./Layout";
import { lazy } from "react";


const Home = lazy(()=> import('pages/Home/Home'))
const Movies = lazy(() => import('pages/Movies/Movies'))
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'))
const Reviews = lazy(() =>import('components/Reviews'))
const Cast = lazy(() => import('components/Cast/Cast'))
// const NotFoundPage = lazy(() => import('components/NotFoundPage'));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="movies" element={<Movies />}/>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<Navigate to='/'/>} />
      </Route>
    </Routes>
  );
};
