import { Link } from "react-router-dom";

function Category({categoryName, topics}){
    const ListOfTopics = topics.map(topic => { // Creating a div for each Topic
        return (
            <div key = {topic}>
                <Link to = {categoryName + '/' + topic}>
                    {topic}
                </Link>
            </div>
        )
    });

    

    return (
        <div>
            <div>
                <Link to = {categoryName} className = 'text-cyan-900'> 
                    Go to {categoryName} 
                </Link>
            </div>
            {ListOfTopics}
        </div>
  
    );
}


export default Category;