import { useGlobalContext } from "./Context";

const MovieBtn = () => {
  const { fetchRandomMovie } = useGlobalContext();

  return (
    <section className="movie-picker">
      <button className="movie-btn" onClick={fetchRandomMovie}>
        Choose a movie
      </button>
    </section>
  );
};

export default MovieBtn;
