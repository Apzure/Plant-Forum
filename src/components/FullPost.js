import { useParams } from "react-router-dom";

function FullPost(){
    const {id} = useParams();
    // make a request for the post using the id, if no id found return 'not found' page, else return Post
    const title = 'This is the Testing Post Title, Post id {id}'
    const creator = 'IamablockofDirt3451'
    const content = 'Hi everyone, I am currently a 3rd yr undergrad philosophy major with a minor in logic, as well as a *accelerated* masters student in computer science. My curriculum consists of courses in mathematical logic, computability and complexity, finite model theory, set theory, abstract algebra, real analysis, philosophy of math, epistemology, programming language theory, algorithmic game theory, machine learning, as well as the typical CS topics (databases, architecture, etc.I have become very passionate about logic, CS theory, and pure math, and am now looking to pursue graduate study. Some specific topics I have studied that Im into are computability and complexity, finite model theory and descriptive complexity, and epistemic logic. I could also see myself getting into things like game theory, computational learning theory, AI, category theory, or algebra; although I am not as knowledgeable on these yet (will be taking these classes throughout the next 3 semesters)I have two professors who are legitimate logicians (one a model theorist and philosopher of math and one a computer scientist) that have already offered me letters of rec, and in this upcoming semester I will be doing research with a major figure in the field of programming languages.I guess my main question is, what are some programs that I should look into that are strong in a subset of the fields I mentioned? As of now CMUs pure and applied logic and Berkeleys LMS programs seem ideal, but outside of these I dont know which schools to look out for. Obviously schools like MIT Stanford etc are strong in everything, but are there some particular schools that have strong logic/theory groups within their CS/Math/Phil departments? Any particular professors whose work I should look into? Thank you'
    // Need to figure out images

    return (
        <div className="fullPost">
            <div className="postTitle">
                {title} by {creator}
            </div>

            <div className="postContent">
                {content} 
            </div>
        </div>
    )
}


export default FullPost;