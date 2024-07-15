import { createContext, useEffect, useRef, useState } from "react";
import { albumsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    const [albumId, setAlbumId] = useState();

    const [userLogged, setUserLogged] = useState();

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

    useEffect(() => {
        localStorage.setItem('isLoggedIn', isLoggedIn.toString());
      }, [isLoggedIn]);

    const [track, setTrack] = useState(albumsData[0].songsData[0]);
    const [playerStatus, setPlayerStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime:{
            second:0,
            minute:0,
        },
        totalTime:{
            second:0,
            minute:0,
        }
    });

    const play = () => {
        audioRef.current.play();
        setPlayerStatus(true);
    };

    const pause = () => {
        audioRef.current.pause();
        setPlayerStatus(false);
    };

    const playWithId = async (id, albumId = albumId) => {
        await setTrack(albumsData[albumId].songsData[id]);
        await audioRef.current.play();
        setPlayerStatus(true)
    }

    const previousSong = async () => {
        if(track.id > 0){
            await setTrack(albumsData[albumId].songsData[track.id-1]);
            await audioRef.current.play();
            setPlayerStatus(true);
        }
    };
    const nextSong = async () => {
        if(track.id < albumsData[albumId].songsData.length -1){
            await setTrack(albumsData[albumId].songsData[track.id+1]);
            await audioRef.current.play();
            setPlayerStatus(true);
        }
    };

    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)* audioRef.current.duration);
    }


    
    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {

                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration * 100)) + '%';

                setTime({
                    currentTime:{
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute:Math.floor(audioRef.current.currentTime / 60),
                    },
                    totalTime:{
                        second: Math.floor(audioRef.current.duration % 60),
                        minute:Math.floor(audioRef.current.duration / 60),
                    }
                })
            }
        },1000)
    },[audioRef])

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track, setTrack,
        playerStatus, setPlayerStatus,
        time, setTime,
        play, pause,
        playWithId,
        previousSong, nextSong,
        seekSong,
        setAlbumId,
        isLoggedIn, setIsLoggedIn,
        userLogged,setUserLogged,
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
};

export default PlayerContextProvider;