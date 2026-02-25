import { Bookmark, Play } from 'lucide-react'
import HeroBg from'../assets/herobg2.jpg'
import { useEffect, useState } from 'react';
const Hero = () => {
  const [movie, setmovie] = useState(null);
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTBiYTZiZTA2Y2IxNTNmYzc4MWNjNWU4MzRiYjkwYSIsIm5iZiI6MTc3MTk0OTE0Ni40Njg5OTk5LCJzdWIiOiI2OTlkY2M1YTZhMjQwOTFkOGJjMGVjYTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6Oa5SVfXhnMixv7B9mUrbr6a6ZO-0sPVCC7rP3AvZeY'
  }
};

useEffect(() => {
fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', 
  options)
  .then((res) => res.json())
  .then((res) => {
    if(res.results && res.results.length >0){
      const randomIndex = Math.floor(Math.random() * res.results.length);
      setmovie(res.results[randomIndex]);
    }
  })
  .catch((err) => console.error(err));
}, []);
if (!movie){
  return <p>Loading...</p>;
}
  return (
    <div className="text-white realative">
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
        alt="log-img" className='w-full round-2x1 h-[480px]object-center object-cover'/>
        <div className='flex space-x-2 md:space-x-4 absolute bottom-3 left-4 md:bottom-8 md:left-10 font-medium'>
            <button className='flex justify-center items-center bg-white hover:bg-gray-200 text-[#e50914] py-3 px-4 rounded-full cursor-pointer text-sm md:text-base'>
                <Bookmark className="mr-2 w-4 h-5 md:w-5 md:h-5" />Save for Later</button>
            <button className='flex justify-center items-center bg-[#e50914]
            text-white py-3 px-4 rounded-full cursor-pointer text-sm md:text-base'>
                <Play className="mr-2 w-4 h-5 md:w-5 md:h-5" />Watch Now</button>
        </div>
    </div>
  )
}

export default Hero
