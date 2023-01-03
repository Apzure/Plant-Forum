import { Route, Routes } from "react-router-dom";
import Category from "./Category"

function CategoriesMenu({categories}){
    const CatMenu = categories.map(cat => { //Creating a div for each Category 
        return (
            <div className="my-[100px]" key = {cat.title}>
                <Category title={cat.title} topics = {cat.topics} /> 
            </div>
        );
    });

  
    return ( 
        <div className="flex flex-col place-content-around">
            { CatMenu }
        </div>
    );
}   


export default CategoriesMenu;