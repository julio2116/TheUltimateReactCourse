const WatchedSummary = ({watched}) => {
    const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
    let avgImdbRating=null, avgUserRating='', avgRuntime=null

    if(watched.length){
    avgImdbRating = average(watched.map((movie) => movie.imdbRating)).toFixed(2);
    avgUserRating = average(watched.map((movie) => movie.userRating)).toFixed(2);
    avgRuntime = average(watched.map((movie) => movie.runtime)).toFixed(2);
    }

    return (
        <>
            <div className="summary">
                <h2>Movies you watched</h2>
                <div>
                    <p>
                        <span>#️⃣</span>
                        <span>{watched.length} movies</span>
                    </p>
                    <p>
                        <span>⭐️</span>
                        <span>{avgImdbRating}</span>
                    </p>
                    <p>
                        <span>🌟</span>
                        <span>{avgUserRating}</span>
                    </p>
                    <p>
                        <span>⏳</span>
                        <span>{avgRuntime} min</span>
                    </p>
                </div>
            </div>
        </>
    )
}
export default WatchedSummary