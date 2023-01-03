import { Link } from "react-router-dom";

function Topic({topic, to}) {
    const {name, desc} = topic;

    return (   
        <div className="flex place-content-between border-b-2 border-t-gray-600 h-fit py-1.5">
            <div className="w-[600px] ml-3 self-center">
                <div>
                    <Link to={to} className='hover:underline text-green-700  text-xl'>
                        {name}
                    </Link>
                </div>
                <div>
                    {desc}
                </div>
            </div>
            <div className="mr-3 self-center">
                <div>
                    Example Post Title 
                </div>
                <div>
                    X days Y hrs ago, by admin123  
                </div>
            </div>
        </div> // Will have to make a request for the Post
    ); 
}

export default Topic;