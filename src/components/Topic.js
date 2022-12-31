import Link from "./Link"

function Topic({children}){
    return (
    <div className = "topic" >
        <Link to = {children}> 
            Go to {children} 
        </Link>
    </div>
    )
}


export default Topic;