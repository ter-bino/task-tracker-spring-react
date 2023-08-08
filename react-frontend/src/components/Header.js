

function Header() {
  return <div class="header flex flex-row justify-between items-center">
    <h1 class="uppercase sm:text-md md:text-xl xl:text-3xl cursor-pointer font-bold">
        [
        <span class="hover:text-blue-700 mx-1">
            <span class="text-red-900 hover:text-violet-700">
                Task
            </span>
            Tracker!
        </span> 
        ]
    </h1>
    <div class="flex flex-row justify-end items-center uppercase sm:text-sm md:text-lg xl:text-2xl">
        [ <span class="m-2 nav-link text-white">home</span> ]
        [ <span class="m-2 nav-link text-white">create task</span> ]
    </div>
  </div>;
}

export default Header;