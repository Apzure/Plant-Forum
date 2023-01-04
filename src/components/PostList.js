import { Link } from "react-router-dom";

function PostList({posts}){
    const renderedPosts = posts.map(post => {
        const {title, creator, time} = post;
        const id = Math.floor(Math.random() * 1000000); // request for post ID or just use if already requested

        return ( //will have to change link to remove spaces and possible duplicates, for key as well (add key)
            <Link to={'/Post/' + id}> 
                <div className="flex place-content-between px-4 py-2 border-b-[2px] border-zinc-600 hover:bg-slate-200">
                    <div>
                        <div className='text-green-600'> 
                            {title} 
                        </div>
                        <div className="text-sm text-slate-800">  
                            by {creator} {time} 
                        </div>
                    </div>
                    <div>
                        <div>
                            123 Views
                        </div>
                        <div>
                            4 Replies
                        </div>
                    </div>
                </div>
            </Link>
        );
      
    });
  
    return (
        <div>
            {renderedPosts}
        </div>
    );
}


export default PostList;