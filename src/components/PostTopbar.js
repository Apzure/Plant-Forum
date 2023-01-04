import { Link } from "react-router-dom";
import { useState } from "react";

function PostTopbar({topic}) {
    const [IsDropdownOpen, setDropdownOpen] = useState(false);
    const Dropdown = // In progress
        <div className="absolute bg-amber-300  ">
            <div>
                Recent
            </div>
            <div>
                Hot
            </div>
            <div>
                Top
            </div>
        </div>
    const handleDropdown = () => {
        setDropdownOpen(!IsDropdownOpen);
    };
    return ( // Consider breaking apart into multiple components
        <div className="pb-2 mb-0 border-b-4 border-zinc-700 flex flex-col place-content-between px-4">
            <div className="flex place-content-between" >
                <div className=" w-[700px]">
                    <div className="text-2xl">
                        {topic.name}
                    </div>
                    <div className="text-stone-600 text-sm">
                        {topic.desc}
                    </div>
                </div>
                <div className="self-center bg-amber-300  rounded-md mt-4" onClick={handleDropdown}>
                    <div className="p-1">
                        Sort by Recent
                    </div>
                    {IsDropdownOpen && Dropdown}
                </div>
                <Link to='CreatePost' className=" self-center bg-green-400 rounded-lg p-2 mt-4 hover:bg-green-500">
                    Create New Post
                </Link>
            </div>
            <div> 
                <button className="mr-2 bg-lime-200 w-[20px] h-[20px]">
                    1
                </button>
                <button className="mr-2 bg-lime-200 w-[20px] h-[20px]">
                    2
                </button>
            </div>
        </div>
    ) // Page bar Draft
}

export default PostTopbar;