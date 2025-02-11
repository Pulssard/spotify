import { useContext } from 'react'
import {assets} from '../assets/assets';
import {useNavigate} from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';



const Navbar = () => {

    const navigate = useNavigate();
    const {setIsLoggedIn, userLogged, setShowSidebar,showSidebar} = useContext(PlayerContext);

    const handleLogOut = () => {
        setIsLoggedIn(false);
        navigate('/signin');
    }

  return (
    <>
        <div className='w-full flex justify-between items-center font-semibold '>
            <div className='flex items-center gap-2'>
                <img  onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-xl cursor-pointer' src={assets.arrow_left} alt='arrow left' />
                <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-xl cursor-pointer' src={assets.arrow_right} alt='arrow right' />
            </div>
            <div className='flex items-center gap-4'>
                <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden lg:block cursor-pointer'> Explore Premium </p>
                <p onClick={handleLogOut} className='bg-black py-1 px-3 rounded-2xl text-[15px] ml-2 cursor-pointer '>Log Out</p>
                <span onClick={() => setShowSidebar(!showSidebar)}  className='sm:hidden text-white cursor-pointer'> ☰ </span>
                <p className='bg-purple-500 text-black items-cente justify-center px-4 py-1 rounded-2xl hidden sm:block'>{userLogged}</p>
            </div>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'> All</p>
            <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
            <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
        </div>
    </>
  )
}

export default Navbar
