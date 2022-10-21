import {
  Outlet,
  Link,
  useParams,
  useSearchParams,
  useLocation,
} from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Formik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchForm, Input, Button, Span, Header } from './Movies.styled';
import { fetchSearch } from '../services/api';
import { FcFilmReel } from 'react-icons/fc';
import Loader from 'components/Loader';

export const Movies = () => {

const [items, setItems] = useState(null);
	const [isLoad, setIsLoad] = useState(false);
	const [query, setQuery] = useState('');
	const { movieId } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	const location = useLocation();
 

	const handleSubmit = async (values, actions) => {
	  
    if (values.name.trim() === '') {
		toast.error('Введите текст запроса!', { position: 'top-right' });
		return;
	  };
	  actions.setSubmitting(false);
	  setQuery(values.name.toLowerCase());
	  setSearchParams({ query: values.name.toLowerCase() });
		
	};

useEffect(() => {
	if (searchParams?.get("query"))
	{
		setQuery(searchParams.get('query'));
	  }
}, [searchParams]);

	

useEffect(() => {
  const options = {
    position: 'top-right',
    autoClose: 3000,
	};
	
	if (!query) 
	{
		return;
		}
  async function fetchData() {
    setIsLoad(true);
    try {
      const movies = await fetchSearch(query);
      setItems(movies.results);
    } catch {
      toast.error('Oops, something went wrong. Repeat one more time!', options);
    } finally {
      setIsLoad(false);
    }
  }
	fetchData();
}, [query]);

	
  
	return (
    <main>
      {!movieId && (
        <>
          <Header>
            <ToastContainer />
            <Formik initialValues={{ name: searchParams.get('query') ?? '' }} onSubmit={handleSubmit}>
              {({ isSubmitting }) => (
                <SearchForm>
                  <Button type="submit" disabled={isSubmitting}>
                    <Span data-comp="spanItem">Search</Span>
                  </Button>

                  <Input
                    name="name"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                    
                  />
                </SearchForm>
              )}
            </Formik>
          </Header>
          <Loader isLoad={isLoad} />
          {items && (
            <ul>
              {items.map(({ id, title }) => (
                <li key={id}>
                  <FcFilmReel size={24} />{' '}
                  <Link to={`/movies/${id}`} state={{ from: location }}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      )}

      <Outlet />
    </main>
  );
};