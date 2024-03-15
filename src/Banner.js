import React, { useEffect, useState } from "react";
import requests from "./Request";
import axios from "./axios";
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNEtflixOriginals);
        const results = request.data.results;
        setMovie(results[Math.floor(Math.random() * results.length - 1)]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div
      className="relative h-96    "
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: " center contain ",
      }}
    >
      {/* contents of banner */}
      <div className="text-white space-y-2 absolute bottom-20 left-5">
        <h1 className="text-3xl font-bold">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="flex gap-x-2 items-center">
          <button className="bannerbtn">Play</button>
          <button className="bannerbtn">My List</button>
        </div>
        <p className="text-xs  w-1/2 line-clamp-2">{movie?.overview}</p>
      </div>
    </div>
  );
}

export default Banner;
