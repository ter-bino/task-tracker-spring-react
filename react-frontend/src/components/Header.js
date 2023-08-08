

function Header() {
  return <div className="header flex flex-row justify-between items-center">
    <h1 className="uppercase sm:text-md md:text-xl xl:text-3xl cursor-pointer font-bold">
        [
        <span className="hover:text-blue-700 mx-1">
            <span className="text-red-900 hover:text-violet-700">
                Task
            </span>
            Tracker!
        </span> 
        ]
    </h1>
    <div className="flex flex-row justify-end items-center uppercase sm:text-sm md:text-lg xl:text-2xl">
        [ <span className="m-2 nav-link text-white">home</span> ]
        [ <span className="m-2 nav-link text-white">create task</span> ]
    </div>
  </div>;
}

export default Header;