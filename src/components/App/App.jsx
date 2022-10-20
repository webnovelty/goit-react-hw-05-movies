import { Home } from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import { Movies } from 'pages/Movies';
import { NotFoundPage } from 'pages/NotFoundPage';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '../SharedLayout';

const Cast = lazy(() => import('pages/Cast'));
const Reviews = lazy(() => import('pages/Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
