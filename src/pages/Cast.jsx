import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchCast } from '../services/api';
import { GalleryCast, Img, Card, Name, Character } from './Cast.styled';
import Loader from 'components/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [items, setItems] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
	const posterUrl = `https://www.themoviedb.org/t/p/w138_and_h175_face`;


	const defaultImg = 'https://pondokindahmall.co.id/assets/img/default.png';
	
	useEffect(() => {
	  
    const options = {
      position: 'top-right',
      autoClose: 3000,
	  };
	  

		async function fetchData() {
		
      setIsLoad(true);
      try {
        const movies = await fetchCast(movieId);
        setItems(movies.cast);
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
if (!items) {
  return;
}
	return (
    <GalleryCast>
      <Loader isLoad={isLoad} />
      {items.map(({ id, name, profile_path, character }) => (
        <Card key={id}>
          {!profile_path && <Img src={defaultImg} alt={name} />}
          {profile_path && <Img src={posterUrl + profile_path} alt={name} />}
          <Name>{name}</Name>
          <Character>Character: {character}</Character>
        </Card>
      ))}
    </GalleryCast>
  );
};

export default Cast;