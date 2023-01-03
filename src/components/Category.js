import { Link } from "react-router-dom";
import Topic from "./Topic";

function Category({title, topics}) {   
    const CategoryTitle = 
                        <div className = 'bg-green-400  pl-3 pb-5 pt-1'>
                            <Link to = {title} className='font-bold text-2xl hover:underline'> 
                                {title} 
                            </Link>
                        </div>

    const ListOfTopics = topics.map(topic => { // Creating a <Topic/> for each topic
        return (
            <Topic topic={topic} to={title + '/' + topic.name} key={topic.name} />   
                     
        )
    });

    return (
        <div>
            <div>
                {CategoryTitle}
                {ListOfTopics}
            </div>
        </div>
  
    );
}


export default Category;