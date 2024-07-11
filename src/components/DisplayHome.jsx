import React from "react" ;
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
    return (
        <>
            <Navbar />
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
                <div className="flex overflow-auto ">
                    {albumsData.map((el, i) => (<AlbumItem key={i} name={el.name} desc={el.desc} id={el.id} image={el.image}/>))}
                </div>
            </div>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
                <div className="flex overflow-auto ">
                    {songsData.map((el, i) => (<SongItem key={i} name={el.name} desc={el.desc} id={el.id} image={el.image}/>))}
                </div>
            </div>
        </>
    )
};

export default DisplayHome;