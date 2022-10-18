import axios from 'axios';

const API_KEY = `855b8cf23be6caa3bd45667cf9081aaa`;
const URL = `https://api.themoviedb.org/`;


async function fetchMovies() {
	const response = await axios.get(
		`${URL}3/trending/movie/day?api_key=${API_KEY}`
	);
	const data = await response.data;

	return data;
}

async function fetchMovieByID(movieId) {
	const response = await axios.get(
		`${URL}3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
	);
	const data = await response.data;

	return data;
}

async function fetchCast(movieId) {
	const response = await axios.get(
		`${URL}3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
	);
	const data = await response.data;

	return data;
}

async function fetchReviews(movieId) {
	const response = await axios.get(
		`${URL}3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
	);
	const data = await response.data;

	return data;
}

async function fetchSearch(query) {
	const response = await axios.get(
		`${URL}3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
	);
	const data = await response.data;

	return data;
}



export { fetchMovies, fetchMovieByID, fetchCast, fetchReviews, fetchSearch };