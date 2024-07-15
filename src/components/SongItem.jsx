import React, { useContext, useEffect,useState } from 'react'
import { PlayerContext } from '../context/PlayerContext';
import { albumsData } from '../assets/assets';

const SongItem = ({name, image, desc}) => {
  const [id, setId] = useState(-1); // Initialize id with a default value
  const [albumId, setAlbumId] = useState(-1); // Initialize albumId with a default value

  useEffect(() => {
    // Reset id and albumId
    /*setId(-1);
    setAlbumId(-1);*/

    // Search for the album and song id
    const foundAlbumIndex = albumsData.findIndex(album => {
      const foundSong = album.songsData.find((song, i) => {
        if (song.name === name) {
          setId(i); // Update id when song name matches
          return true; // Return true to stop searching further
        }
        return false; // Return false if song name does not match
      });
      return foundSong !== undefined; // Return true if a song is found in the album
    });

    setAlbumId(foundAlbumIndex);
  }, [name]); // Only run this effect when name changes
  
  

  const { playWithId } = useContext(PlayerContext);

  return (
    <div onClick={() => playWithId(id, albumId)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded'  src={image}  alt="image"/>
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem;