import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Moviepage from "./pages/Moviepage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import {Toaster} from "react-hot-toast"
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import AIRecommendations from "./pages/AIRecommendations";
import TvShows from "./pages/TvShows";
import Movies from "./pages/Movies";
import Anime from "./pages/Anime";
import Games from "./pages/Games";
import NewPopular from "./pages/NewPopular";
import Upcoming from "./pages/UpComing";
import Saved from "./pages/Saved";

const App = () => {
  const {fetchUser, fetchingUser} = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser])

  if(fetchingUser){
    return <p className="text-[#e50914]">Loading...</p>
  }
  return (
    <div>
      <Toaster />
      <Navbar />

      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/movie/:id"} element={<Moviepage />} />
        <Route path={"/signin"} element={<SignIn />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/ai-recommendations"} element={<AIRecommendations />} />
        <Route path="/tv" element={<TvShows />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/anime" element={<Anime />} />
      <Route path="/games" element={<Games />} />
      <Route path="/new-popular" element={<NewPopular />} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/saved" element={<Saved />} />
      </Routes>
    </div>
  );
};

export default App;
