import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Movies } from "pages/Movies";
import { MovieElemInfo } from "pages/MovieDetails";
import { lazy } from "react";
import { Home } from "pages/Home";
import { Reviews } from "pages/Reviews";

import { Cast } from "pages/Cast";
// const Cast = lazy(() => import('pages/Cast'))


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="movies" element={<Movies />}/>
        <Route path="movies/:movieId" element={<MovieElemInfo />}>
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
      </Route>
    </Routes>
  );
};
