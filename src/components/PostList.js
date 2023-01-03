import { Link } from "react-router-dom";

function PostList({posts}){
    const renderedPosts = posts.map(post => {
        const {title, creator, time} = post;

        return ( //will have to change link to remove spaces and possible duplicates, key as well 
            <Link to={title} key={title}> 
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
                        Views, Replies
                    </div>
                </div>
                <hr></hr>
            </Link>
        );
      
    });
  
    return (
        <div className="h-[1000px]">
            {renderedPosts}
        </div>
    );
}


export default PostList;