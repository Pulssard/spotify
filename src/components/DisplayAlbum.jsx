import { useContext, useEffect } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {

    const {id} = useParams();
    const albumData = albumsData[id];
    const {playWithId} = useContext(PlayerContext);
    const {setAlbumId} = useContext(PlayerContext);

    useEffect(() => {
        setAlbumId(id);
    },[id,setAlbumId]);

  return (
    <>
        <Navbar />
        <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
            <img  className="w-48 rounded" src={albumData.image} alt='album image'/>
            <div className='flex flex-col'>
                <p>Playlist</p>
                <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                <h4>{albumData.desc}</h4>
                <p className='mt-1'>
                    <img className='inline-block w-5' src={assets.spotify_logo} alt="spotify logo"/>
                    <b className='mx-2'>Spotify</b>
                    • 7,211 likes
                     <b className='mx-2'>• 50 songs,</b>
                    about 2hr 17min
                </p>
            </div>
        </div>
        <div className='grid grid-cols-2 items-end sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] gap-3'>
            <p>
                <b className='mr-4'>#</b>
                Title
            </p>
            <p className='hidden sm:block ml-10 '>Album</p>
            <p className='hidden sm:block'>Date Added</p>
            <img className='m-auto w-4 ' src={assets.clock_icon} alt='clock icon'/>
        </div>
        <hr />
        {
            albumData.songsData.map((el, i) => (
                <div onClick={() => playWithId(el.id,id)} key={i} className='grid grid-cols-2 sm:grid-cols-4 gap-8 p-2 items-center text-[#727070]  hover:bg-[#ffffff] cursor-pointer'>
                    <p className='text-[#a7a7a7] flex '>
                        <b className='mr-4 text-[#a7a7a7]'>{i+1}</b>
                        <img className='w-10 h-10 mr-5 hidden sm:inline' src={el.image} alt='song image' />
                        <span>{el.name.slice(0,12) + '...'}</span>
                    </p>
                    <p className='text-[15px] hidden ml-10 sm:block'>{albumData.name}</p>
                    <p className='text-[15px] hidden sm:block'>5 days ago</p>
                    <p className='text-[15px] text-center'>{el.duration}</p>
                </div>))
        }
    </>
  )
}

export default DisplayAlbum