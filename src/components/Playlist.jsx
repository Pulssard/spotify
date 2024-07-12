import React from 'react'

const Playlist = (props) => {
  return (
    <>
        <div className='ml-5 mt-5 flex text-white gap-5 items-center'>
            <div className='h-12 w-12 bg-orange-500'>
            </div>
            <h4>{props.name}</h4>
        </div>
    </>
  )
}

export default Playlist