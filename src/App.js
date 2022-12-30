import TopicsMenu from './components/TopicsMenu';

function App() {
  const topics = [{name: 'Gardening', id: 1}, {name: 'Decoration', id: 2}]
  
  return (
    <div> 
      Hello 
      <TopicsMenu topics = {topics} />
    </div>
  );
}

export default App;
