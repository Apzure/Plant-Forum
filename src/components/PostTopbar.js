import { Link } from "react-router-dom";

function PostTopbar({topic}) {
    return (
        <div className="flex place-content-between pb-2 mb-5 border-b-4 border-lime-800" >
            <div className="ml-4 w-[800px]">
                <div className="text-2xl">
                    {topic.name}
                </div>
                <div className="text-stone-600 text-sb">
                    {topic.desc}
                </div>
            </div>
            <Link to='CreatePost' className="mr-4 self-center bg-green-400 rounded-sm p-2 hover:bg-green-500">
                Create New Post
            </Link>
        </div>
    )
}

export default PostTopbar;