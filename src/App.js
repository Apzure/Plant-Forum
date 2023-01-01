import TopicsMenu from './components/TopicsMenu';

function App() {
  const topics = [{name: 'Gardening', id: 1}, {name: 'Decoration', id: 2}, {name: 'Suggestoins', id:3}]
  
  return (
    <div className="bg-green-100 h-screen ">
      <div className="mx-[30rem] sticky text-center min-w-fit bg-white h-screen overflow-hidden"> 
        <h1 className='text-3xl mt-2 mb-10'> 
          Welcome To Plantopia 
        </h1>
        <div className='bg-green-400 '>
          Navbar
        </div>
        
        <TopicsMenu topics = {topics} />
      </div>
    </div>
  );
}

export default App;
