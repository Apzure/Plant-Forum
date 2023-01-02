import { Link } from "react-router-dom";

function Category({categoryName, topics}){
    const ListOfTopics = topics.map(topic => { // Creating a div for each Topic
        return (
            <div className = 'text-green-700 ml-10' key = {topic}>
                <Link to = {categoryName + '/' + topic}>
                    {topic}
                </Link>
            </div>
        )
    });

    

    return (
        <div>
            <div className = 'bg-green-400 font-bold text-2xl pl-10 pb-5 pt-1'>
                <Link to = {categoryName} > 
                    Go to {categoryName} 
                </Link>
            </div>
            {ListOfTopics}
        </div>
  
    );
}


export default Category;