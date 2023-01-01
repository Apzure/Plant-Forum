function FullPost({ title, creator, content }){
    return (
        <div className="fullPost">
            <div className="postTitle">
                {title} by {creator}
            </div>

            <div className="postContent">
                {content}
            </div>
        </div>
    )
}


export default FullPost;