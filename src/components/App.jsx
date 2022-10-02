import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import { lazy, Suspense } from 'react';


const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Layout = lazy(() => import('./Layout/Layout'));

export const App = () => {
  return (
    <div className={css.conteiner}>
      <Suspense fallback={<h1>Загрузка...</h1>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
