import { Link } from "react-router-dom";

function PostList({posts}){
    const renderedPosts = posts.map(post => {
        const {title, creator, time} = post;

        return ( //will have to change link to remove spaces and possible duplicates, for key as well (add key)
            <Link to={title}> 
                <div className="flex place-content-between px-4 py-2 hover:bg-slate-100">
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
                <hr></hr>
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