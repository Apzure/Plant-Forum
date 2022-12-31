import Link from "./Link"

function TopicsMenu({topics}){
    const renderedtopics = topics.map(topic => {
        return (
        <div key = {topic.id} >
            <Link> {topic.name} </Link>
        </div>
        )
    })
  
    return renderedtopics
}


export default TopicsMenu