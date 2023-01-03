import PostList from "../components/PostList";
import PostTopbar from "../components/PostTopbar";

function PostsMenuPage({topic}) { // Need to make multiple page functionality
    const posts = [ // Fetched by a Request
        {title: 'Post1', creator: 'user12', time: '15/12'},
        {title: 'How do I fly', creator: 'usering53792139173132131', time: '14/12'},
        {title: 'Longest Post length test how it work should be long enough now!', creator: 'user5', time: '7/7'},
        {title: 'Post1', creator: 'user12', time: '15/12'},
        {title: 'How do I fly', creator: 'usering53792139173132131', time: '14/12'},
        {title: 'Longest Post length test how it work should be long enough now!', creator: 'user5', time: '7/7'},
        {title: 'Post1', creator: 'user12', time: '15/12'},
        {title: 'How do I fly', creator: 'usering53792139173132131', time: '14/12'},
        {title: 'Longest Post length test how it work should be long enough now!', creator: 'user5', time: '7/7'},
        {title: 'Post1', creator: 'user12', time: '15/12'},
        {title: 'How do I fly', creator: 'usering53792139173132131', time: '14/12'},
        {title: 'Longest Post length test how it work should be long enough now!', creator: 'user5', time: '7/7'},
        {title: 'Post1', creator: 'user12', time: '15/12'},
        {title: 'How do I fly', creator: 'usering53792139173132131', time: '14/12'},
        {title: 'Longest Post length test how it work should be long enough now!', creator: 'user5', time: '7/7'},
        

    ]
    return (
        <div className="h-[1000px]">
            {<PostTopbar topic={topic} />}
            {<PostList posts={posts} />}
        </div>
        
    );
}


export default PostsMenuPage;