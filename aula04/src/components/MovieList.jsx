import Movie from './Movie.jsx'

const MovieList = ({movies, onSelectMovie}) => {
    return (
        <>
            <ul className="list list-movies">
                {movies ? movies.map((movie) => (
                    <Movie movie={movie}  key={movie.imdbID} onSelectMovie={onSelectMovie} />
                )):''}
            </ul>
        </>
    )
}
export default MovieList