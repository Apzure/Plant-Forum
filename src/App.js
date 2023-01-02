import CategoriesMenu from './components/CategoriesMenu';
import { Route, Routes } from "react-router-dom";
import ListofTopicsPage from './pages/ListOfTopicsPage';
import PostsListPage from './pages/PostsListPage';
import { Fragment } from 'react';

function App() {
  const Categories = [  // Array of Categories, name is the Name of the Cat, topics is the Topics classified under the Cat
    {name: 'Garderning', topics: ['Fruits', 'Vegetables', 'Indoor Plants']}, 
    {name: 'Decoration', topics: ['Landscaping', 'Household Decoration', 'Flowers']}, 
    {name: 'Meta', topics:['Announcements', 'Suggestions and Feedback']}
  ];

  const RoutesForCategories = Categories.map(cat => { // To create a Route for each Category
    const {name, topics} = cat

    const RoutesForTopics = topics.map(topic => { // To create Routes for all Topics for each Category
      return <Route path = {name + '/' + topic} element = {<PostsListPage topic={topic} />} key={topic} />
    });
   
    return ( // Fragment is used, instead of <>, to provide a key
      <Fragment key = {name}> 
        <Route path = {name} element = {<ListofTopicsPage name = {name} topics={topics} />} />
        {RoutesForTopics}
      </Fragment> 
    ); 
  });
  
  return (
    <div className="bg-green-100 h-screen ">
      <div className="mx-[30rem] sticky min-w-fit bg-white h-screen overflow-hidden"> 
        <h1 className='text-3xl mt-2 mb-10 text-center'> 
          Welcome To Plantopia 
        </h1>
        
        <div className='bg-green-400 text-center'>
          Navbar
        </div>

        <Routes>
          <Route path = '/' element = {<CategoriesMenu categories={Categories} />} />
          {RoutesForCategories}
        </Routes>
      </div>
    </div>
  );
}

export default App;
