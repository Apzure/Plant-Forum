import { Route, Routes } from "react-router-dom";
import Category from "./Category"

function CategoriesMenu({categories}){
    const CategoriesMainMenu = categories.map(cat => { //Creating a div for each Category 
        return (
            <div className="my-[100px] border-grey border-2" key = {cat.name}>
                <Category categoryName = {cat.name} topics = {cat.topics} /> 
            </div>
        );
    });

  
    return ( 
        <div className="flex flex-col place-content-around">
            { CategoriesMainMenu }
        </div>
    );
}   


export default CategoriesMenu;