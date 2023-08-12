import { NavLink } from "react-router-dom";

function Header() {
  return <div className="header flex flex-row justify-between items-center">
    <h1 className="uppercase sm:text-md md:text-xl xl:text-3xl cursor-pointer font-bold">
        [
        <NavLink to="/" className="hover:text-blue-700 mx-1">
            <span className="text-red-900 hover:text-violet-700">
                Task
            </span>
            Tracker!
        </NavLink> 
        ]
    </h1>
    <div className="flex flex-row justify-end items-center uppercase sm:text-sm md:text-lg xl:text-2xl">
        [ <NavLink to="/" className="m-2 nav-link text-white">home</NavLink> ]
        [ <NavLink to="/create" className="m-2 nav-link text-white">create task</NavLink> ]
    </div>
  </div>;
}

export default Header;