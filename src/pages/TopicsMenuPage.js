import Category from "../components/Category";

function TopicsMenuPage({title, topics}){ // Temp: should be modified to another file to make it look better (diff css), and to fix incorect links OR remove this page                
    return (
        <div className="mb-[500px]">
            <Category title={title} topics={topics} />
        </div>
    ); 
}

export default TopicsMenuPage;