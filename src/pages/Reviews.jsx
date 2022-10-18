import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchReviews } from '../services/api';
import { GalleryCast, Card, Name, Character, Bad } from './Reviews.styled';
import { FaSadTear, FaUserNinja } from 'react-icons/fa';

export const Reviews = () => {
	 
  const { movieId } = useParams();
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
        const movies = await fetchReviews(movieId);
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
  }, [movieId]);
	
	
	return (
   <div>
      {items && (
        <GalleryCast>
          {items.map(({ id, author, content }) => (
            <Card key={id}>
				  <Name><FaUserNinja size={50} /> {author}</Name>
              <Character>{content}</Character>
            </Card>
          ))}
        </GalleryCast>
      )}
      {items?.length === 0 && (<Bad>Sorry, no reviews today <FaSadTear size={50} /></Bad>)}
    </div>
  );
};