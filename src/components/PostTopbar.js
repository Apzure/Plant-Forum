import { Link } from "react-router-dom";
import { useState } from "react";

function PostTopbar({topic}) {
    const [IsDropdownOpen, setDropdownOpen] = useState(false);
    const Dropdown = 
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
    return (
        <div className="flex place-content-between pb-2 mb-5 border-b-4 border-lime-800 " >
            <div className="ml-4 w-[700px]">
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
            <Link to='CreatePost' className="mr-4 self-center bg-green-400 rounded-lg p-2 mt-4 hover:bg-green-500">
                Create New Post
            </Link>
        </div>
    )
}

export default PostTopbar;