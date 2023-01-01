import ListOfPostsPage from "../pages/ListOfPostsPage";
import { Route, Routes } from "react-router-dom";
import Topic from "./Topic"

function TopicsMenu({topics}){
    const TopicsMainMenu = topics.map(topic => {
        return (
            <div className="my-[100px] border-grey border-2" key = {topic.id}>
                <Topic> 
                    {topic.name} 
                </Topic>
            </div>
        );
    });

    const IndividualTopics = topics.map(topic => {
        return (
            <Route path = {topic.name} key={topic.id}>
                <ListOfPostsPage name = {topic.name}>

                </ListOfPostsPage>
            </Route>
        )
    });
  
    return ( 
                <div className="flex flex-col place-content-around">
                    { TopicsMainMenu }
                </div>
         
           
   
    );
}   


export default TopicsMenu;