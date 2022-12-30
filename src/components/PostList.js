function PostList({posts}){
    const renderedPosts = posts.map(post => {
        return (
        <div key = {post.id} >
            {post.name}
        </div>
        )
    })
  
    return renderedPosts
}


export default PostList