import CategoriesMenu from './components/CategoriesMenu';
import { Route, Routes } from "react-router-dom";
import TopicsMenuPage from './pages/TopicsMenuPage';
import PostsMenuPage from './pages/PostsMenuPage';
import Navbar from './components/Navbar';
import Categories from './CategoriesData';
import { Fragment } from 'react';

function App() {
  const RoutesForCategoriesAndTopics = Categories.map(cat => { 
    const {title, topics} = cat

    const RoutesForTopics = topics.map(topic => { 
      return <Route path = {topic.name} element = {<PostsMenuPage topic={topic} />} key={topic.name} />
    });
   
    return (
      <Fragment key = {title}> 
        <Route path = {title} element = {<TopicsMenuPage title = {title} topics={topics} />} /> {/* Route for Category*/}
        <Route path={title}>  {/* Routes for Topics within that Category*/}
          {RoutesForTopics}
        </Route>
      </Fragment> 
    ); 
  });
  
  return (
    <div className="bg-green-100 h-full absolute w-full overflow-auto">
      <div className="mx-auto w-[1000px] sticky bg-white h-max pb-[70px]"> 
        <h1 className='text-3xl pt-2 mb-10 text-center'> 
          Welcome To Plantopia 
        </h1>
        
        <Navbar/>

        <Routes>
          <Route path = '/' element = {<CategoriesMenu categories={Categories} />} />
          {RoutesForCategoriesAndTopics}
        </Routes>
      </div>
    </div>
  );
}

export default App;
