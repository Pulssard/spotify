import { useContext, useEffect} from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";
import SignIn from "./components/SignIn";
import {Route, Routes, useLocation} from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LogIn from './components/LogIn';

const App = () => {
  
  const {isLoggedIn, setIsLoggedIn} = useContext(PlayerContext);

  const {audioRef, track} = useContext(PlayerContext);

  const location = useLocation();

  useEffect(() => {
    const authPaths = ['/register', '/login', '/signin'];
    if (authPaths.includes(location.pathname)) {
      setIsLoggedIn(false);
    }
  }, [location.pathname, setIsLoggedIn]);

  const DisplayHome = <div className="h-screen bg-black">
  <div className="h-[90%] flex">
    <Sidebar />
    <Display />
  </div>
    <Player />
    <audio ref={audioRef} src={track.file} preload="auto"></audio>
</div>;

  return ( 
    <Routes>
    { isLoggedIn ? (<Route path="/*" element={DisplayHome} />)
    : (
      <>
      <Route path='/register' element={<RegisterForm />} />
      <Route path='/*' element = {<SignIn />} />
      <Route path='/login' element = {<LogIn />} />
      </>
    )}
    </Routes>
    );
};

export default App;