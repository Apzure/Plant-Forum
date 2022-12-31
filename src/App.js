import TopicsMenu from './components/TopicsMenu';

function App() {
  const topics = [{name: 'Gardening', id: 1}, {name: 'Decoration', id: 2}, {name: 'Suggestoins', id:3}]
  
  return (
    <div className="mx-[500px] text-center bg-[#00FF00]"> 
      Welcome to Plantopia
      <TopicsMenu topics = {topics} />
    </div>
  );
}

export default App;
