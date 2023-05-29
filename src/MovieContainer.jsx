import { useGlobalContext } from "./Context";
import drawerAddIcon from "./assets/Drawer-Add.svg";

const MovieContainer = () => {
  const { movie, loading, addToWatchlist } = useGlobalContext();
  //   console.log(movie);
  const { poster_path, overview, id, title, vote_average } = movie;
  const tmdbPosterPath = "https://image.tmdb.org/t/p/original";

  return (
    <main className="main-container">
      <section className="movie-display" key={id}>
        <div className="movie-poster">
          <img
            src={`${tmdbPosterPath}${poster_path}`}
            alt={title}
            className="movie-poster"
          />
        </div>
        <article className="movie-details">
          <h2 className="movie-title">{title}</h2>
          <p className="movie-description">{overview}</p>
          <h3 className="movie-rating">Rating: {vote_average}</h3>
          <button className="watchlist-btn" onClick={addToWatchlist}>
            Add to watchlist
            <img
              src={drawerAddIcon}
              className="watchlist-icon"
              alt="watchlist add"
            />
          </button>
        </article>
      </section>
    </main>
  );
};

export default MovieContainer;
