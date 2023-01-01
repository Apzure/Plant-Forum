import Topic from "./Topic"

function TopicsMenu({topics}){
    const renderedtopics = topics.map(topic => {
        return (
            <div className="my-[100px] border-grey border-2" key = {topic.id}>
                <Topic> 
                    {topic.name} 
                </Topic>
            </div>
        );
    });
  
    return ( 
            <div className="flex flex-col place-content-around">
                { renderedtopics }
            </div>
        
    )
}   


export default TopicsMenu;