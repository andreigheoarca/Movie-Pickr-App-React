import deleteIcon from "./assets/X-Square.svg";
import { useGlobalContext } from "./Context";

const Watchlist = () => {
  const { watchlist, getCurrentWatchlist, deleteFromLocalStorage } =
    useGlobalContext();

  const currentWatchlist = getCurrentWatchlist();
  console.log(currentWatchlist);
  return (
    <>
      <h4>Watchlist</h4>
      <section className="watchlist-container">
        {currentWatchlist.map((item) => {
          console.log(item);
          const { poster, overview, id, title, rating } = item;
          console.log(poster, overview, id, title, rating);
          return (
            <div className="watchlist-poster" key={id}>
              <img
                src={deleteIcon}
                className="delete-icon"
                alt="delete icon"
                onClick={() => deleteFromLocalStorage(id)}
              />
              <img
                src={`https://image.tmdb.org/t/p/original/${poster}`}
                alt={title}
              />
              <footer className="frosted-section">
                <h5>{title}</h5>
              </footer>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Watchlist;
