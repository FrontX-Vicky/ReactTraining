// import logo from './logo.svg';
import './App.css';
import { useState , useEffect, useReducer, useRef} from 'react';

function App() {

  const [title, setTitle] = useState("")
  const [color, setColor] = useState("#000")

  // Logic
  const submit = (e) => {
    e.preventDefault();

    alert(`${title}, ${color}`)
    setTitle("");
    setColor("#000");
  }




  // IU
  return (
    <div className="App">
      <form onSubmit={submit}>
        <input
            type="text"
            value={title} 
            onChange={(event) => setTitle(event.target.value)}
            placeholder="color title..." 
        />
        <input 
            type="color" 
            value={color}
            onChange={(event) => setColor(event.target.value)}
        />
        <button>ADD</button>
      </form>
    </div>
  );
}

export default App;
