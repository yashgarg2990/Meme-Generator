import logo from './logo.svg';
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className="App">
      <h1> Meme generator </h1>
      <Random/>
      <Tag/>
      
    </div>
  );
}

export default App;
