import Category from "../components/Category";

function ListofTopicsPage({name, topics}){
    return <Category categoryName={name} topics={topics} />; // Temp: should be modified to another file to make it look better (diff css), and to fix incorect links
}

export default ListofTopicsPage;