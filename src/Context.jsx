import React from "react";
import { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  // Random number generated in order to randomly select a page from the fetched data
  const randomNumGen = () => {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    // console.log(randomNum);
    return randomNum;
  };
  // API URL
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=f50ab56a6675f3c83a1dda67aba2d247&language=en-US&page=${randomNumGen()}`;
  //   console.log(URL);

  // Random number generated in order to select a movie from fetched movie results array
  const randomMovieGet = () => {
    let randomNum = Math.floor(Math.random() * 20);
    // console.log(randomNum);
    return randomNum;
  };

  const fetchRandomMovie = async () => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      const randomMovie = data.results[randomMovieGet()];
      console.log(randomMovie);
      setMovie(randomMovie);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRandomMovie();
  }, []);

  const getCurrentWatchlist = () => {
    const currentWatchlist = JSON.parse(localStorage.getItem("watchlist"));
    if (currentWatchlist) {
      return JSON.parse(localStorage.getItem("watchlist"));
    } else {
      return [];
    }
  };

  const addToWatchlist = () => {
    const { poster_path, overview, id, title, vote_average } = movie;
    let currentMovie = {
      poster: poster_path,
      overview: overview,
      id: id,
      title: title,
      rating: vote_average,
    };
    let currentWatchlist = getCurrentWatchlist();
    currentWatchlist.push(currentMovie);
    localStorage.setItem("watchlist", JSON.stringify(currentWatchlist));
    setWatchlist(currentWatchlist);
  };

  const deleteFromLocalStorage = (id) => {
    const currentWatchlist = getCurrentWatchlist();
    let filteredWatchlist = currentWatchlist.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    localStorage.setItem("watchlist", JSON.stringify(filteredWatchlist));
    setWatchlist(filteredWatchlist);
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        randomNumGen,
        movie,
        fetchRandomMovie,
        addToWatchlist,
        getCurrentWatchlist,
        deleteFromLocalStorage,
        watchlist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
