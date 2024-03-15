import axios from "./axios";
import React, { useEffect, useState } from "react";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);

        const results = request.data.results;
        setMovies(results);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="text-white ">
      <h2 className="text-xl font-medium p-4">{title}</h2>
      <div className="flex overflow-y-hidden overflow-x-scroll cursor-pointer px-4 space-x-4 no-scrollbar scroll-smooth object-contain">
        {movies.map((movie) => (
          <img
            className="
            max-h-32 hover:scale-150 transition ease-linear duration-300"
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
