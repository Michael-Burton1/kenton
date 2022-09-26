import './App.css';
import Header from './Organisim/Header/Header';
import ShowControl from './Organisim/ShowControl/ShowControl';

function App() {
  const name= 'Lady Gaga';
  const support= 'David';
  return (
    <div className="App">
      <Header />
      <ShowControl />
    </div>
  );
}

export default App;
