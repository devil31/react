import logo from './logo.svg';
import './App.css';
function Ciao(){
  return (
    <div>
      <h1>ciao mondo</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
            ciao mondo 
            <Ciao/>
      </header>
    </div>
  );
}

export default App;
