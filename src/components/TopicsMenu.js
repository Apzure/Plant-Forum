import Topic from "./Topic"

function TopicsMenu({topics}){
    const renderedtopics = topics.map(topic => {
        return (
        <div key = {topic.id} >
            <Topic > 
                {topic.name} 
            </Topic>
        </div>
        );
    });
  
    return renderedtopics;
}


export default TopicsMenu;