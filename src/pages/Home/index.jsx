import React, { useEffect, useState } from "react";

const moviesURl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURl}top_rated?${apiKey}`;

    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Best movies:</h2>
      <div className="moviesContainer">
        <div>
          {topMovies.length === 0 && <p>Loading...</p>}
          {topMovies.length > 0 &&
            topMovies.map((movie) => <p>{movie.title}</p>)}
        </div>
      </div>
    </div>
  );
};

export default Home;

//
