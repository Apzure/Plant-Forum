import Category from "./Category"

function CategoriesMenu({categories}){
    const CatMenu = categories.map(cat => { //Creating a div for each Category 
        return <Category title={cat.title} topics = {cat.topics} key = {cat.title}/>;
    });
  
    return ( 
        <div className="flex flex-col place-content-around">
            { CatMenu }
        </div>
    );
}   


export default CategoriesMenu;