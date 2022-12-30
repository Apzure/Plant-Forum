function TopicsMenu({topics}){
    const renderedtopics = topics.map(topic => {
        return (
        <div key = {topic.id} >
            {topic.name}
        </div>
        )
    })
  
    return renderedtopics
}


export default TopicsMenu