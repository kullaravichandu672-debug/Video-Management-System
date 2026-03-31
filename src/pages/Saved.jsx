import { useEffect, useState } from "react";

const Saved = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("savedMovies")) || [];
    setMovies(data);
  }, []);

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl mb-4">Saved Movies</h1>

      <div className="grid grid-cols-5 gap-4">
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={movie.poster}
              alt=""
              className="rounded"
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saved;