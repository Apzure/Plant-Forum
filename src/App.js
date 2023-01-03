import CategoriesMenu from './components/CategoriesMenu';
import { Route, Routes } from "react-router-dom";
import TopicsMenuPage from './pages/TopicsMenuPage';
import PostsListPage from './pages/PostsListPage';
import { Fragment } from 'react';
import Categories from './CategoriesData';

function App() {
  const RoutesForCategoriesAndTopics = Categories.map(cat => { 
    const {title, topics} = cat

    const RoutesForTopics = topics.map(topic => { // To create Routes for all Topics within each Category
      return <Route path = {topic.name} element = {<PostsListPage topic={topic} />} key={topic.name} />
    });
   
    return ( // The first <Route/> is for a Category, the next is for the Topics within that Cat
      <Fragment key = {title}> 
        <Route path = {title} element = {<TopicsMenuPage title = {title} topics={topics} />} /> 
        <Route path={title}>
          {RoutesForTopics}
        </Route>
      </Fragment> 
    ); 
  });
  
  return (
    <div className="bg-green-100 h-full absolute w-full">
      <div className="mx-auto w-[1000px] sticky bg-white h-max pb-[50px]"> 
        <h1 className='text-3xl pt-2 mb-10 text-center'> 
          Welcome To Plantopia 
        </h1>
        
        <div className='bg-green-400 text-center'>
          Navbar
        </div>

        <Routes>
          <Route path = '/' element = {<CategoriesMenu categories={Categories} />} />
          {RoutesForCategoriesAndTopics}
        </Routes>
      </div>
    </div>
  );
}

export default App;
