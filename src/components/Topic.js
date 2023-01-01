import Link from "./Link"

function Topic({children}){
    return (
    <div>
        <Link to = {children}> 
            Go to {children} 
        </Link>
    </div>
    )
}


export default Topic;