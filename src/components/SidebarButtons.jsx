const SidebarButtons = ({textDesc,textTitle,margin}) => {
  return (
    <div className={`p-4 bg-[#121212] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 ${margin}`}>
    <h1>{textTitle}</h1>
    <p className='font-light hidden md:block'>{textDesc}</p>
    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 '>{textTitle}</button>
</div>
  )
}

export default SidebarButtons