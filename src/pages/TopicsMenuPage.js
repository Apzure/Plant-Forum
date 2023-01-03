import Category from "../components/Category";

function TopicsMenuPage({title, topics}){
    return <Category title={title} topics={topics} />; // Temp: should be modified to another file to make it look better (diff css), and to fix incorect links
                                                       // OR remove this page entirely.
}

export default TopicsMenuPage;