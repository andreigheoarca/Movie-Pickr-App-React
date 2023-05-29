import { useState } from "react";
import "./styles.css";
import Logo from "./Logo";
import MovieContainer from "./MovieContainer";
import MovieBtn from "./MovieBtn";
import Watchlist from "./Watchlist";

function App() {
  return (
    <>
      <Logo />
      <MovieContainer />
      <MovieBtn />
      <Watchlist />
    </>
  );
}

export default App;
