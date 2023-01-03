import { Link } from "react-router-dom";
import { useState } from "react";
import Topic from "./Topic";
import {IoMdArrowDropdownCircle, IoMdArrowDroprightCircle } from  "react-icons/io";

function Category({title, topics}) {   
    const CategoryTitle = 
                        <Link to={title} className='font-bold text-2xl hover:underline'> 
                            {title} 
                        </Link>
                    

    const ListOfTopics = topics.map(topic => { // Creating a <Topic/> for each topic
        return (
            <Topic to={title + '/' + topic.name} topic={topic} key={topic.name} />            
        )
    });

    const [isExpanded, setExpanded] = useState(true);
    const Icon = isExpanded ? <IoMdArrowDropdownCircle size={35} /> : <IoMdArrowDroprightCircle size={35} />;
    const handleClick = () => setExpanded(!isExpanded);
    

    return (
        <div>
            <div className="flex place-content-between bg-green-400 p-3">
                <div>
                    {CategoryTitle}
                </div>
                <div onClick={handleClick}>
                    {Icon}
                </div>
            </div>
            {isExpanded && ListOfTopics}  {/* ListOfTopics only displayed when IsExpanded is True */}
        </div>
    );
}


export default Category;