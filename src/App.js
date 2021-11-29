import {useState} from 'react';

function App() {

  const [counter,setCounter] = useState(1)

function HandleClick(){
  setCounter(counter + 1)
}

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={HandleClick}>Plus</button>
    </div>
  );
}

export default App;
