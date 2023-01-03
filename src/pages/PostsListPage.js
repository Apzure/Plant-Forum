function PostsListPage({topic}) {
    return (
        <>
            <div>
                {topic.name} page
            </div>
            <div>
                Desc: {topic.desc}
            </div>
        </>
    );
}


export default PostsListPage;