import Post from "./FullPost";

function PostList({posts}){

    const renderedPosts = posts.map(post => {
        return (
        <div key = {post.id} >
            <Post title = {post.title} creator = {post.creator} content = {post.content}> </Post>
        </div>
        );
    });
  
    return renderedPosts;
}


export default PostList;