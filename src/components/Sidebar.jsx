import { useContext } from 'react';
import {assets} from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import SidebarButtons from './SidebarButtons';
import { PlayerContext } from '../context/PlayerContext';
//import Playlist from './Playlist';
 const Sidebar = () => {

    const navigate = useNavigate();
    const {showSidebar} = useContext(PlayerContext)
    
    return (
        <div className={`sidebar w-[25%] min-w-[150px] h-full p-2 flex-col gap-2 text-white ${showSidebar ? 'flex' : 'hidden'} sm:flex`}>
            <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
                <div onClick={() => navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-6' src={assets.home_icon} alt='home icon'/>
                    <p className='font-bold'>Home</p>
                </div>
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-6' src={assets.search_icon} alt='home icon'/>
                    <p className='font-bold'>Search</p>
                </div>
            </div>
            <div className='bg-[#121212] h-[85%] rounded'>
                <div className=' p-4 flex flex-col lg:flex-row  items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className='w-8' src={assets.stack_icon} alt='stack icon' />
                        <p className='font-semibold'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3 mt-4 lg:mt-0'>
                        <img className='w-5' src={assets.arrow_icon} alt='arrow icon'/>
                        <img  className='w-5' src={assets.plus_icon} alt='plus icon'/>
                    </div>
                </div>
                    {/*<Playlist name={}/>*/} 
                <SidebarButtons textTitle='Create playlist' textDesc="It's plain and easy..." margin=''/>
                <SidebarButtons textTitle='Podcasts' textDesc="We'll keep you updated!" margin='mt-4'/>
            </div>
        </div>
    )
};

export default Sidebar;