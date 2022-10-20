
import { Suspense, useEffect, useState } from 'react';
import { AiFillCaretLeft } from 'react-icons/ai';
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import {
	Additional,
	AdditionalTitle, Film,
	FilmContent, FilmDescription,
	FilmDescriptionText, FilmDescriptionTitle, FilmInfo,
	FilmInfoItem,
	FilmInfoLabel,
	FilmInfoText,
	FilmTitle,
	Img
} from './MovieDetails.styled';
import { fetchMovieByID } from '../services/api';

import Loader from 'components/Loader';

const MovieDetails = () => {
	
	const { movieId } = useParams();
	const [items, setItems] = useState(null);
	const [isLoad, setIsLoad] = useState(false);
	const posterUrl = `https://image.tmdb.org/t/p/w500`;

	useEffect(() => {
		const options = {
			position: 'top-right',
			autoClose: 3000,
		};
		async function fetchData() {
			setIsLoad(true);
			try {
				const movies = await fetchMovieByID(movieId);
				setItems(movies);

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

	const location = useLocation();
	const cameBack = location.state?.from ?? '/';

	if (!items) {
		return;
	}
	const { title, vote_average, poster_path, tagline, release_date, overview, genres } = items;
	

	return (
		<>
			<Link to={cameBack}>
				<AiFillCaretLeft /> Go back
			</Link>
			<Loader isLoad={isLoad} />
			{items && (
				<div>
					<Film>
						<Img src={posterUrl + poster_path} alt={tagline
						} />

						<FilmContent>
							<FilmTitle>{title} ({release_date.slice(0, 4)})</FilmTitle>
							<FilmInfo>
								<FilmInfoItem>
									<FilmInfoLabel>User score:</FilmInfoLabel>
									<FilmInfoText>{Math.round(vote_average * 10)}%</FilmInfoText>
								</FilmInfoItem>
								<FilmInfoItem>
									<FilmInfoLabel>Genres</FilmInfoLabel>
									<FilmInfoText>
										{genres.map(({ id, name }) => (<span key={id}>{name}, </span>))}
									</FilmInfoText>
								</FilmInfoItem>
							</FilmInfo>
							<FilmDescription>
								<FilmDescriptionTitle>Overview</FilmDescriptionTitle>
								<FilmDescriptionText>{overview}</FilmDescriptionText>
							</FilmDescription>
						</FilmContent>

					</Film>
					<AdditionalTitle>Additional Information</AdditionalTitle>
					<Additional>
						<FilmInfoItem>
							<Link to="cast" state={{ from: cameBack }}>Cast</Link>
						</FilmInfoItem>
						<FilmInfoItem>
							<Link to="reviews" state={{ from: cameBack }}>Reviews</Link>
						</FilmInfoItem>
					</Additional>
					<Suspense>
						<Outlet />
					</Suspense>
				</div>
			)}
		</>
	);
};

export default MovieDetails;