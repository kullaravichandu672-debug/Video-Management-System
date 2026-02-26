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
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
                className="rounded-lg shadow-lg w-48 hidden md:block"
                />

                <div>
                    <h1 className="text-4xl font-boldmmd-2">{movie.title}</h1>
                    <div>
                        <span>⭐{movie.vote_average} </span>
                    </div>
                </div>
            </div>
        </div>
        </div>
        );
};

export default Moviepage;
