import './App.css';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import Cards from './components/cards/Cards';

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Cards />
    </div>
  );
}

export default App;
