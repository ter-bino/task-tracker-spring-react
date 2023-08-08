

function Header() {
  return <div class="header flex flex-row justify-between items-center font-bold">
    <h1 class="uppercase sm:text-md md:text-xl xl:text-3xl cursor-pointer">
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
        <span class="mr-2 nav-link">[ home ]</span>
        <span class="mr-2 nav-link">[ create task ]</span>
    </div>
  </div>;
}

export default Header;