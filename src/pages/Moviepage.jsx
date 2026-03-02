import { Play, PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Moviepage = () => {
    const{id} = useParams();
    const [movie, setMovie] = useState(null)

    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTBiYTZiZTA2Y2IxNTNmYzc4MWNjNWU4MzRiYjkwYSIsIm5iZiI6MTc3MTk0OTE0Ni40Njg5OTk5LCJzdWIiOiI2OTlkY2M1YTZhMjQwOTFkOGJjMGVjYTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6Oa5SVfXhnMixv7B9mUrbr6a6ZO-0sPVCC7rP3AvZeY"
  }
};

useEffect(() => {
fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
  .then((res) => res.json())
  .then((res) => setMovie(res))
  .catch((err) => console.error(err));
}, [id]);

if (!movie) {
    return ( 
    <div className="flex items-center justify-center h-screen">
        <span className="text-xl text-red-500">Loading...</span>
        </div>
    );
}

return (
<div className="min-h-screen bg-[#181818] text-white">
    <div 
    className="realative h-[60vh] flex item-end" 
    style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.
            backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition:"center"
        }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-[#181818]
            via-transparent to-transparent"></div>
            <div className="realtive z-10 flex items-end p-8 gap-8">
                <img 
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                className="rounded-lg shadow-lg w-48 hidden md:block"
                />

                <div>
                    <h1 className="text-4xl font-bold md-2">{movie.title}</h1>
                    <div className="flex iteams-center gap-4 mb-2">
                        <span>⭐{movie.vote_average?.toFixed(1)} </span>
                        <span>{movie.release_date}</span>
                        <span>{movie.runtime} min</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {movie.genres.map((genre) => (
                            <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                                {genre.name}
                            </span>
                        ))}
                    </div>
                    <p className="max-w-2xl text-gray-200"> {movie.overview}</p>
                    <button className="flex justify-center items-center bg-[#e50914]
                    text-white py-3 px-4 rounded-full cursor-pointer text-sm 
                    md:text-base mt-2 md:mt-4">
                    <Play className="mr-2 w-4 h-5 md:w-5 md:h-5" /> Watch Now
                    </button>
                </div>
                </div>
                </div>
                </div>
        );
};

export default Moviepage;
