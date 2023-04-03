import './App.css';
import { Component1 } from './Component1';
import Errorboundary from './Errorboundary';

function App() {
  return (
    <div className="App">
      <Errorboundary>
        <Component1 a={[1,"banana","pinapple","guava"]}/>
      </Errorboundary>
    </div>
  );
}

export default App;
