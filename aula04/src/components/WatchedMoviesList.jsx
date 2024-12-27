import WatchedMovie from "./Watchedmovie.jsx"

const WatchedMoviesList = ({watched, handleDeleteWatched}) => {
    return (
        <>
            <ul className="list">
                {watched.length ? watched.map((movie) => (
                    <WatchedMovie movie={movie} key={movie.imdbID} handleDeleteWatched={handleDeleteWatched}/>
                )) : ''}
            </ul>
        </>
    )
}
export default WatchedMoviesList