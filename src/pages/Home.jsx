import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchMovies } from '../services/api';
import { NavLink } from 'react-router-dom';
import { FcFilmReel } from 'react-icons/fc';

export const Home = () => {
  const [items, setItems] = useState(null);
  const [isLoad, setIsLoad] = useState('false');

  useEffect(() => {
    const options = {
      position: 'top-right',
      autoClose: 3000,
    };
    async function fetchData() {
      setIsLoad(true);
      try {
        const movies = await fetchMovies();
		  setItems(movies.results);
		 
      } catch {
        toast.error(
          'Oops, something went wrong. Repeat one more time!',
          options
        );
	  } finally {
		 
        setIsLoad(false);
      }
    }
    fetchData();
  }, []);
	
  return (
    <main>
      <h1>Trending today</h1>
      {items && (
        <ul>
          {items.map(({ id, title }) => (
            <li key={id}>
             <FcFilmReel size={24} /> <NavLink to={`movies/${id}`}>{title}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};
